import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { APP_CONSTANTS } from '../../../const/app-const';
import { LanguageSelectorComponent } from '../language-selector-component/language-selector-component';

@Component({
  selector: 'app-toolbar-component',
  imports: [MatToolbar, LanguageSelectorComponent],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css',
})
export class ToolbarComponent {
  readonly applicationName = APP_CONSTANTS.name;
}
