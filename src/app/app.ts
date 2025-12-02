import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { APP_CONSTANTS } from '../const/app-const';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly applicationName = APP_CONSTANTS.name;

  constructor(private title: Title) {
    this.title.setTitle(this.applicationName);
  }
}
