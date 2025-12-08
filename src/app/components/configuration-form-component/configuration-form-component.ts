import { Component } from '@angular/core';
import { AccConfigurationFormService } from '../../services/acc-configuration-form-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { I18N_KEYS } from '../../../const/i18n-const';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { FileService } from '../../services/file-service';
import { MatIcon } from '@angular/material/icon';
import { BaseInternationalizedComponent } from '../base/base-internationalized-component';

@Component({
  selector: 'app-configuration-form-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    TranslateModule,
    MatSelectModule,
    MatIcon,
  ],
  templateUrl: './configuration-form-component.html',
  styleUrl: './configuration-form-component.css',
})
export class ConfigurationFormComponent extends BaseInternationalizedComponent {

  constructor(private formService: AccConfigurationFormService, private  fileService: FileService) {
    super();
  }

  get form(): FormGroup {
    return this.formService.form;
  }

  onSubmit(): void {
    this.fileService.downloadJson("test", this.formService.getValue());
  }
}
