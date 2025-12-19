import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { isString, TranslateModule, TranslateService } from '@ngx-translate/core';

import { FileService } from '../../services/file-service';
import { BaseInternationalizedFormComponent } from '../base/base-internationalized-form-component';

import { AccSettings } from '../../models/acc-settings.model';
import { AccSettingsFormService } from '../../services/acc-settings-form-service';
import { CarGroupsEnum } from '../../enum/car-groups.enum';
import { FormationLapTypeEnum } from '../../enum/formation-lap-type.enum';
import { TrackMedalsRequirementEnum } from '../../enum/track-medal-requirement.enum';
import { FILENAME_CONSTANTS } from '../../../const/file-const';

@Component({
  selector: 'app-acc-settings-form-component',
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
  templateUrl: './acc-settings-form-component.html',
  styleUrl: './acc-settings-form-component.css',
})
export class AccSettingsFormComponent
  extends BaseInternationalizedFormComponent<AccSettings, AccSettingsFormService>
  implements OnInit {

  yesNoOptions: { value: 0 | 1; label: string }[] = [];
  carGroupOptions: { value: CarGroupsEnum; label: string }[] = [];
  formationLapOptions: { value: FormationLapTypeEnum; label: string }[] = [];
  trackMedalReqOptions: { value: TrackMedalsRequirementEnum; label: string }[] = [];

  constructor(
    protected override formService: AccSettingsFormService,
    private fileService: FileService,
    private translate: TranslateService
  ) {
    super(formService);
  }

  ngOnInit(): void {
    const carGroupsEnumValues = Object.values(CarGroupsEnum);
    const formationEnumValues = Object.values(FormationLapTypeEnum).filter(v => typeof v === 'number') as FormationLapTypeEnum[];
    const trackMedalEnumValues = Object.values(TrackMedalsRequirementEnum).filter(v => typeof v === 'number') as TrackMedalsRequirementEnum[];

    this.translate
      .stream([
        this.I18N_KEYS.LABEL.ENABLED,
        this.I18N_KEYS.LABEL.DISABLED,
        ...carGroupsEnumValues.map(cg => this.LABELS.CAR_GROUP[cg]),
        ...formationEnumValues.map(fl => this.I18N_KEYS.LABEL.FORMATION_LAP_TYPE[fl]),
        ...trackMedalEnumValues.map(t => this.I18N_KEYS.LABEL.TRACK_MEDALS_REQUIREMENT[t]),
      ])
      .subscribe(tr => {
        this.yesNoOptions = [
          { value: 1, label: tr[this.I18N_KEYS.LABEL.ENABLED] },
          { value: 0, label: tr[this.I18N_KEYS.LABEL.DISABLED] },
        ];
        this.carGroupOptions = carGroupsEnumValues.map(cg => ({
          value: cg,
          label: isString(this.LABELS.CAR_GROUP[cg]) ? tr[this.LABELS.CAR_GROUP[cg]] : '',
        }));
        this.formationLapOptions = formationEnumValues.map(fl => ({
          value: fl,
          label: tr[this.I18N_KEYS.LABEL.FORMATION_LAP_TYPE[fl]],
        }));
        this.trackMedalReqOptions = trackMedalEnumValues.map(t => ({
          value: t,
          label: tr[this.I18N_KEYS.LABEL.TRACK_MEDALS_REQUIREMENT[t]],
        }));
      });
  }

  protected override onSubmit(): void {
    this.fileService.downloadJson(FILENAME_CONSTANTS.SETTINGS, this.formService.getValue());
  }
}
