import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { APP_CONSTANTS } from '../const/app-const';
import { LanguageService } from './services/language-service';
import { I18N_KEYS } from '../const/i18n-const';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe, TranslateDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly applicationName = APP_CONSTANTS.name;
  I18N_KEYS = I18N_KEYS;

  constructor(private title: Title, private languageService: LanguageService) {
    // Set application title
    this.title.setTitle(this.applicationName);
  }
}
