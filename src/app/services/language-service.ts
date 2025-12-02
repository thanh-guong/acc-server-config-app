import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONSTANTS } from '../../const/app-const';
import { LOCAL_STORAGE_ITEM_KEYS } from '../../const/local-storage-const';
import { INFO_LOGGING_MESSAGES } from '../logging/info-logging';
import { WARN_LOGGING_MESSAGES } from '../logging/warn-logging';

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
    // Add available languages to TranslateService
    this.translate.addLangs(this.availableLanguages);
    console.info(INFO_LOGGING_MESSAGES.availableLanguages, this.availableLanguages);

    // Check for saved language in localStorage
    const saved = localStorage.getItem(LOCAL_STORAGE_ITEM_KEYS.lang);
    console.info(INFO_LOGGING_MESSAGES.savedLanguage, saved);

    // Get browser language
    const browser = navigator.language.split('-')[0];
    console.info(INFO_LOGGING_MESSAGES.browserLanguage, browser);

    // Determine which language to use
    const langToUse =
      saved ??
      (this.availableLanguages.includes(browser) ? browser : this.fallbackLang);

    // Set the determined language
    this.setLanguage(langToUse);
  }

  setLanguage(lang: string) {
    // Validate the language
    if (!this.availableLanguages.includes(lang)) {
      console.warn(WARN_LOGGING_MESSAGES.usingDefaultLanguage, this.fallbackLang);
      lang = this.fallbackLang;
    }

    // Set the language in TranslateService and save to localStorage
    this.translate.use(lang);
    localStorage.setItem(LOCAL_STORAGE_ITEM_KEYS.lang, lang);

    // Log the language being used
    console.info(INFO_LOGGING_MESSAGES.usingLanguage, lang);
  }

  get currentLanguage(): string {
    return this.translate.getCurrentLang() || this.fallbackLang;
  }

  get languages(): string[] {
    return this.availableLanguages;
  }
}
