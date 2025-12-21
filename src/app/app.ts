import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { APP_CONSTANTS } from '../const/app-const';
import { LanguageService } from './services/language-service';
import { I18N_KEYS } from '../const/i18n-const';
import { ToolbarComponent } from './components/toolbar-component/toolbar-component';
import { ConfigurationFormComponent } from './components/configuration-form-component/configuration-form-component';
import { AccSettingsFormComponent } from './components/acc-settings-form-component/acc-settings-form-component';
import { LanguageSelectorComponent } from './components/language-selector-component/language-selector-component';
import { AssistRulesFormComponent } from './components/assist-rules-form-component/assist-rules-form-component';
import { EventRulesFormComponent } from './components/event-rules-form-component/event-rules-form-component';
import { EventFormComponent } from './components/event-form-component/event-form-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe, TranslateDirective, ToolbarComponent, ConfigurationFormComponent, AccSettingsFormComponent, LanguageSelectorComponent, AssistRulesFormComponent, EventRulesFormComponent, EventFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly applicationName = APP_CONSTANTS.name;
  I18N_KEYS = I18N_KEYS;

  constructor(private title: Title, private languageService: LanguageService) {
    // Set application title
    this.title.setTitle(this.applicationName);
  }
}
