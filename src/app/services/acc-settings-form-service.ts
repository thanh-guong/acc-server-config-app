import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BaseFormService } from './base-form-service';
import { AccSettings } from '../models/acc-settings.model';
import { CarGroupsEnum } from '../enum/car-groups.enum';
import { FormationLapTypeEnum } from '../enum/formation-lap-type.enum';
import { TrackMedalsRequirementEnum } from '../enum/track-medal-requirement.enum';
import { ACC_SETTINGS_VALUES } from '../../const/form-values-const';

@Injectable({ providedIn: 'root' })
export class AccSettingsFormService extends BaseFormService<AccSettings, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      serverName: this.fb.control(ACC_SETTINGS_VALUES.serverName.defaultValue, Validators.required),
      adminPassword: this.fb.control(ACC_SETTINGS_VALUES.adminPassword.defaultValue, Validators.required),
      carGroup: this.fb.control<CarGroupsEnum>(ACC_SETTINGS_VALUES.carGroup.defaultValue, Validators.required),
      trackMedalsRequirement: this.fb.control<TrackMedalsRequirementEnum>(ACC_SETTINGS_VALUES.trackMedalsRequirement.defaultValue, Validators.required),
      safetyRatingRequirement: this.fb.control(
        ACC_SETTINGS_VALUES.safetyRatingRequirement.defaultValue,
        [
          Validators.required,
          Validators.min(ACC_SETTINGS_VALUES.safetyRatingRequirement.minValue),
          Validators.max(ACC_SETTINGS_VALUES.safetyRatingRequirement.maxValue),
        ]
      ),
      racecraftRatingRequirement: this.fb.control(
        ACC_SETTINGS_VALUES.racecraftRatingRequirement.defaultValue,
        [
          Validators.required,
          Validators.min(ACC_SETTINGS_VALUES.racecraftRatingRequirement.minValue),
          Validators.max(ACC_SETTINGS_VALUES.racecraftRatingRequirement.maxValue),
        ]
      ),
      password: this.fb.control<string | undefined>(ACC_SETTINGS_VALUES.password.defaultValue),
      spectatorPassword: this.fb.control<string | undefined>(ACC_SETTINGS_VALUES.spectatorPassword.defaultValue),
      maxCarSlots: this.fb.control(
        ACC_SETTINGS_VALUES.maxCarSlots.defaultValue,
        [
          Validators.required,
          Validators.min(ACC_SETTINGS_VALUES.maxCarSlots.minValue),
          Validators.max(ACC_SETTINGS_VALUES.maxCarSlots.maxValue),
        ]
      ),
      dumpLeaderboards: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.dumpLeaderboards.defaultValue as 0 | 1,Validators.required),
      isRaceLocked: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.isRaceLocked.defaultValue as 0 | 1,Validators.required),
      randomizeTrackWhenEmpty: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.randomizeTrackWhenEmpty.defaultValue as 0 | 1, Validators.required),
      centralEntryListPath: this.fb.control<string | undefined>(ACC_SETTINGS_VALUES.centralEntryListPath.defaultValue),
      allowAutoDQ: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.allowAutoDQ.defaultValue as 0 | 1, Validators.required),
      shortFormationLap: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.shortFormationLap.defaultValue as 0 | 1, Validators.required),
      dumpEntryList: this.fb.control<0 | 1>(ACC_SETTINGS_VALUES.dumpEntryList.defaultValue as 0 | 1, Validators.required),
      formationLapType: this.fb.control<FormationLapTypeEnum>(ACC_SETTINGS_VALUES.formationLapType.defaultValue, Validators.required),
    });
  }
}
