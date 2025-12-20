import { Component, OnInit } from '@angular/core';
import { EventRules } from '../../models/acc-event.model';
import { EventRulesFormService } from '../../services/event-rules-form-service';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';
import { FileService } from '../../services/file-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FILENAME_CONSTANTS } from '../../../const/file-const';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-event-rules-form-component',
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
  templateUrl: './event-rules-form-component.html',
  styleUrl: './event-rules-form-component.css',
})
export class EventRulesFormComponent
  extends BaseInternationalizedFormComponent<EventRules, EventRulesFormService>
  implements OnInit {

  yesNoOptions: { value: true | false; label: string }[] = [];

  constructor(
    protected override formService: EventRulesFormService,
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
          { value: true, label: tr[this.I18N_KEYS.LABEL.ENABLED] },
          { value: false, label: tr[this.I18N_KEYS.LABEL.DISABLED] },
        ];
      });
  }

  protected override onSubmit(): void {
    this.fileService.downloadJson(FILENAME_CONSTANTS.EVENT_RULES, this.formService.getValue());
  }
}
