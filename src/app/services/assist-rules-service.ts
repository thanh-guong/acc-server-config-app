import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ASSIST_RULES_VALUES } from '../../const/form-values-const';
import { BaseFormService } from './base-form-service';
import { AssistRules } from '../models/acc-assist-rules.model';
import { integerPatternValidator } from '../validators/pattern-validators';

@Injectable({ providedIn: 'root' })
export class AssistRulesService extends BaseFormService<AssistRules, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      stabilityControlLevelMax: this.fb.control(ASSIST_RULES_VALUES.stabilityControlLevelMax.defaultValue, [
        Validators.required,
        Validators.min(ASSIST_RULES_VALUES.stabilityControlLevelMax.minValue),
        Validators.max(ASSIST_RULES_VALUES.stabilityControlLevelMax.maxValue),
        integerPatternValidator(),
      ]),
      disableAutosteer: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutosteer.defaultValue as 0 | 1, Validators.required),
      disableAutoLights: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoLights.defaultValue as 0 | 1, Validators.required),
      disableAutoWiper: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoWiper.defaultValue as 0 | 1, Validators.required),
      disableAutoEngineStart: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoEngineStart.defaultValue as 0 | 1, Validators.required),
      disableAutoPitLimiter: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoPitLimiter.defaultValue as 0 | 1, Validators.required),
      disableAutoGear: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoGear.defaultValue as 0 | 1, Validators.required),
      disableAutoClutch: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableAutoClutch.defaultValue as 0 | 1, Validators.required),
      disableIdealLine: this.fb.control<0 | 1>(ASSIST_RULES_VALUES.disableIdealLine.defaultValue as 0 | 1, Validators.required),
    });
  }
}
