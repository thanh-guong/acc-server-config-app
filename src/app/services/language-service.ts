import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONSTANTS } from '../../const/app-const';
import { LOCAL_STORAGE_ITEM_KEYS } from '../../const/local-storage-const';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly availableLanguages = APP_CONSTANTS.supportedLangs;
  private readonly fallbackLang = APP_CONSTANTS.fallbackLang;

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    this.translate.addLangs(this.availableLanguages);

    const saved = localStorage.getItem(LOCAL_STORAGE_ITEM_KEYS.lang);
    const browser = navigator.language.split('-')[0];

    const langToUse =
      saved ??
      (this.availableLanguages.includes(browser) ? browser : this.fallbackLang);

    console.log('Saved language:', saved);
    console.log('Browser language:', browser);
    console.log('Using language:', langToUse);

    this.setLanguage(langToUse);
  }

  setLanguage(lang: string) {
    if (!this.availableLanguages.includes(lang)) {
      lang = this.fallbackLang;
    }

    this.translate.use(lang);
    localStorage.setItem(LOCAL_STORAGE_ITEM_KEYS.lang, lang);
  }

  get currentLanguage(): string {
    return this.translate.getCurrentLang() || this.fallbackLang;
  }

  get languages(): string[] {
    return this.availableLanguages;
  }
}
