import { Injectable } from '@angular/core';
import { FormGroup, FormArray, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BaseFormService } from './base-form-service';
import { EVENT_VALUES } from '../../const/form-values-const';
import { EventConfig } from '../models/acc-event.model';
import { integerPatternValidator } from '../validators/pattern-validators';

@Injectable({
  providedIn: 'root',
})
export class EventFormService extends BaseFormService<EventConfig, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      track: this.fb.control(EVENT_VALUES.track.defaultValue, [Validators.required]),
      preRaceWaitingTimeSeconds: this.fb.control(EVENT_VALUES.preRaceWaitingTimeSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.preRaceWaitingTimeSeconds.minValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      sessionOverTimeSeconds: this.fb.control(EVENT_VALUES.sessionOverTimeSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.sessionOverTimeSeconds.minValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      ambientTemp: this.fb.control(EVENT_VALUES.ambientTemp.defaultValue, [
        Validators.required,
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      cloudLevel: this.fb.control(EVENT_VALUES.cloudLevel.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.cloudLevel.minValue),
        Validators.max(EVENT_VALUES.cloudLevel.maxValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      rain: this.fb.control(EVENT_VALUES.rain.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.rain.minValue),
        Validators.max(EVENT_VALUES.rain.maxValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      weatherRandomness: this.fb.control(EVENT_VALUES.weatherRandomness.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.weatherRandomness.minValue),
        Validators.max(EVENT_VALUES.weatherRandomness.maxValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      configVersion: this.fb.control(EVENT_VALUES.configVersion.defaultValue, [
        Validators.required,
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      postQualySeconds: this.fb.control(EVENT_VALUES.postQualySeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.postQualySeconds.minValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      postRaceSeconds: this.fb.control(EVENT_VALUES.postRaceSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.postRaceSeconds.minValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      sessions: this.fb.array([]),
    });
  }

  createSession(): FormGroup {
    return this.fb.group({
      hourOfDay: this.fb.control(EVENT_VALUES.sessions.hourOfDay.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.sessions.hourOfDay.minValue),
        Validators.max(EVENT_VALUES.sessions.hourOfDay.maxValue),
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
      dayOfWeekend: this.fb.control(EVENT_VALUES.sessions.dayOfWeekend.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.sessions.dayOfWeekend.minValue),
        Validators.max(EVENT_VALUES.sessions.dayOfWeekend.maxValue),
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
      timeMultiplier: this.fb.control(EVENT_VALUES.sessions.timeMultiplier.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.sessions.timeMultiplier.minValue),
        Validators.max(EVENT_VALUES.sessions.timeMultiplier.maxValue),
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
      sessionType: this.fb.control(EVENT_VALUES.sessions.sessionType.defaultValue, [Validators.required]),
      sessionDurationMinutes: this.fb.control(EVENT_VALUES.sessions.sessionDurationMinutes.defaultValue, [
        Validators.required,
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
    });
  }

  getSessions(): FormArray {
    return this.form.get('sessions') as FormArray;
  }

  addSession() {
    this.getSessions().push(this.createSession());
  }

  removeSession(index: number) {
    this.getSessions().removeAt(index);
  }
}
