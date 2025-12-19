import { Component, OnInit } from '@angular/core';
import { AccConfigurationFormService } from '../../services/acc-configuration-form-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { FileService } from '../../services/file-service';
import { MatIcon } from '@angular/material/icon';
import { AccConfiguration } from '../../models/acc-configuration.model';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';
import { CommonModule } from '@angular/common';
import { FILENAME_CONSTANTS } from '../../../const/file-const';

@Component({
  selector: 'app-configuration-form-component',
  imports: [
    CommonModule,
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
export class ConfigurationFormComponent extends BaseInternationalizedFormComponent<AccConfiguration, AccConfigurationFormService> implements OnInit{
  
  options: { value: number; label: string }[] = [];

  constructor(protected override formService: AccConfigurationFormService, private fileService: FileService, private translate: TranslateService) {
    super(formService);
  }

  ngOnInit(): void {
    this.translate.stream([this.I18N_KEYS.LABEL.ENABLED, this.I18N_KEYS.LABEL.DISABLED])
      .subscribe(translations => {
        this.options = [
          { value: 1, label: translations[this.I18N_KEYS.LABEL.ENABLED] },
          { value: 0, label: translations[this.I18N_KEYS.LABEL.DISABLED] }
        ];
    });
  }

  protected override onSubmit(): void {
    this.fileService.downloadJson(FILENAME_CONSTANTS.CONFIGURATION, this.formService.getValue());
  }
}
