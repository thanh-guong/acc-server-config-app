import { Injectable } from '@angular/core';
import { EventRules } from '../models/acc-event.model';
import { BaseFormService } from './base-form-service';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { EVENT_RULES_VALUES } from '../../const/form-values-const';
import { QualifyStandingTypeEnum } from '../enum/qualify-standing-type.enum';
import { integerPatternValidator } from '../validators/pattern-validators';

@Injectable({
  providedIn: 'root',
})
export class EventRulesFormService  extends BaseFormService<EventRules, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      qualifyStandingType: this.fb.control(EVENT_RULES_VALUES.qualifyStandingType.defaultValue, [
        Validators.required,
        integerPatternValidator(),
      ]),
      pitWindowLengthSec: this.fb.control(EVENT_RULES_VALUES.pitWindowLengthSec.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.pitWindowLengthSec.minValue),
        integerPatternValidator(),
      ]),
      driverStintTimeSec: this.fb.control(EVENT_RULES_VALUES.driverStintTimeSec.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.driverStintTimeSec.minValue),
        integerPatternValidator(),
      ]),
      mandatoryPitstopCount: this.fb.control(EVENT_RULES_VALUES.mandatoryPitstopCount.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.mandatoryPitstopCount.minValue),
        integerPatternValidator(),
      ]),
      maxTotalDrivingTime: this.fb.control(EVENT_RULES_VALUES.maxTotalDrivingTime.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.maxTotalDrivingTime.minValue),
        integerPatternValidator(),
      ]),
      maxDriversCount: this.fb.control(EVENT_RULES_VALUES.maxDriversCount.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.maxDriversCount.minValue),
        integerPatternValidator(),
      ]),
      isRefuellingAllowedInRace: this.fb.control<boolean>(EVENT_RULES_VALUES.isRefuellingAllowedInRace.defaultValue),
      isRefuellingTimeFixed: this.fb.control<boolean>(EVENT_RULES_VALUES.isRefuellingTimeFixed.defaultValue),
      isMandatoryPitstopRefuellingRequired: this.fb.control<boolean>(EVENT_RULES_VALUES.isMandatoryPitstopRefuellingRequired.defaultValue),
      isMandatoryPitstopTyreChangeRequired: this.fb.control<boolean>(EVENT_RULES_VALUES.isMandatoryPitstopTyreChangeRequired.defaultValue),
      isMandatoryPitstopSwapDriverRequired: this.fb.control<boolean>(EVENT_RULES_VALUES.isMandatoryPitstopSwapDriverRequired.defaultValue),
      tyreSetCount: this.fb.control(EVENT_RULES_VALUES.tyreSetCount.defaultValue, [
        Validators.required,
        Validators.min(EVENT_RULES_VALUES.tyreSetCount.minValue),
        Validators.max(EVENT_RULES_VALUES.tyreSetCount.maxValue),
        integerPatternValidator(),
      ]),
    });
  }
}
