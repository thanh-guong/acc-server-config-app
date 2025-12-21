import { Component, OnInit } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { EventFormService } from '../../services/event-form-service';
import { SessionTypeEnum } from '../../enum/session-type.enum';
import { EventConfig } from '../../models/acc-event.model';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';
import { FileService } from '../../services/file-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FILENAME_CONSTANTS } from '../../../const/file-const';

@Component({
  selector: 'app-event-form-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
  ],
  templateUrl: './event-form-component.html',
  styleUrls: ['./event-form-component.scss'],
})
export class EventFormComponent
  extends BaseInternationalizedFormComponent<EventConfig, EventFormService>
  implements OnInit {

  sessionTypes = Object.values(SessionTypeEnum);

  constructor(
    protected override formService: EventFormService,
    private fileService: FileService,
    private translate: TranslateService
  ) {
    super(formService);
  }

  ngOnInit(): void {}

  get sessions(): FormArray {
    return this.formService.getSessions();
  }

  addSession() {
    this.formService.addSession();
  }

  removeSession(index: number) {
    this.formService.removeSession(index);
  }

  onSubmit() {
    this.fileService.downloadJson(FILENAME_CONSTANTS.EVENT, this.formService.getValue());
  }
}
