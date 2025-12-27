import { Component } from '@angular/core';
import { BaseInternationalizedComponent } from '../base/base-internationalized-component';
import { APP_CONSTANTS } from '../../../const/app-const';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer-component',
  imports: [
    TranslateModule,
    MatButtonModule,
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent extends BaseInternationalizedComponent {

  constructor() {
    super();
  }

  get repositoryUrl(): string {
    return APP_CONSTANTS.gitHub.repoUrl;
  }
  get linkedInUrl(): string {
    return APP_CONSTANTS.linkedIn.profileUrl;
  }

  get reportAnIssueUrl(): string {
    return APP_CONSTANTS.gitHub.newIssueUrl;
  }
}
