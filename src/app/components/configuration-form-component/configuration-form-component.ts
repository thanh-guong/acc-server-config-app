import { Component } from '@angular/core';
import { AccConfigurationFormService } from '../../services/acc-configuration-form-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { FileService } from '../../services/file-service';
import { MatIcon } from '@angular/material/icon';
import { AccConfiguration } from '../../models/acc-configuration.model';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';

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
export class ConfigurationFormComponent extends BaseInternationalizedFormComponent<AccConfiguration, AccConfigurationFormService> {
  
  constructor(protected override formService: AccConfigurationFormService, private fileService: FileService) {
    super(formService);
  }

  protected override onSubmit(): void {
    this.fileService.downloadJson("test", this.formService.getValue());
  }
}
