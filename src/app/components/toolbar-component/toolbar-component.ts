import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { APP_CONSTANTS } from '../../../const/app-const';

@Component({
  selector: 'app-toolbar-component',
  imports: [MatToolbar],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css',
})
export class ToolbarComponent {
  readonly applicationName = APP_CONSTANTS.name;
}
