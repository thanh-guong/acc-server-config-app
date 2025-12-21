import { Component, OnInit } from '@angular/core';
import { AssistRules } from '../../models/acc-assist-rules.model';
import { AssistRulesService } from '../../services/assist-rules-service';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';
import { FileService } from '../../services/file-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FILENAME_CONSTANTS } from '../../../const/file-const';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assist-rules-form-component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    TranslateModule,
    MatSelectModule,
    MatIcon,
  ],
  templateUrl: './assist-rules-form-component.html',
  styleUrl: './assist-rules-form-component.scss',
})
export class AssistRulesFormComponent
  extends BaseInternationalizedFormComponent<AssistRules, AssistRulesService>
  implements OnInit {

  yesNoOptions: { value: 0 | 1; label: string }[] = [];

  constructor(
    protected override formService: AssistRulesService,
    private fileService: FileService,
    private translate: TranslateService
  ) {
    super(formService);
  }

  ngOnInit(): void {
    this.translate
      .stream([
        this.I18N_KEYS.LABEL.ENABLED,
        this.I18N_KEYS.LABEL.DISABLED,
      ])
      .subscribe(tr => {
        this.yesNoOptions = [
          { value: 1, label: tr[this.I18N_KEYS.LABEL.ENABLED] },
          { value: 0, label: tr[this.I18N_KEYS.LABEL.DISABLED] },
        ];
      });
  }

  protected override onSubmit(): void {
    this.fileService.downloadJson(FILENAME_CONSTANTS.ASSIST_RULES, this.formService.getValue());
  }
}
