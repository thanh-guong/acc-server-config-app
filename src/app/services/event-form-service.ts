import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BaseFormService } from './base-form-service';
import { EVENT_VALUES } from '../../const/form-values-const';

@Injectable({
  providedIn: 'root',
})
export class EventFormService extends BaseFormService<Event, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      track: this.fb.control(EVENT_VALUES.track.defaultValue, [Validators.required]),
      preRaceWaitingTimeSeconds: this.fb.control(EVENT_VALUES.preRaceWaitingTimeSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.preRaceWaitingTimeSeconds.minValue),
      ]),
      sessionOverTimeSeconds: this.fb.control(EVENT_VALUES.sessionOverTimeSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.sessionOverTimeSeconds.minValue),
      ]),
      ambientTemp: this.fb.control(EVENT_VALUES.ambientTemp.defaultValue, [Validators.required]),
      cloudLevel: this.fb.control(EVENT_VALUES.cloudLevel.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.cloudLevel.minValue),
        Validators.max(EVENT_VALUES.cloudLevel.maxValue),
      ]),
      rain: this.fb.control(EVENT_VALUES.rain.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.rain.minValue),
        Validators.max(EVENT_VALUES.rain.maxValue),
      ]),
      weatherRandomness: this.fb.control(EVENT_VALUES.weatherRandomness.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.weatherRandomness.minValue),
        Validators.max(EVENT_VALUES.weatherRandomness.maxValue),
      ]),
      configVersion: this.fb.control(EVENT_VALUES.configVersion.defaultValue, [Validators.required]),
      postQualySeconds: this.fb.control(EVENT_VALUES.postQualySeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.postQualySeconds.minValue),
      ]),
      postRaceSeconds: this.fb.control(EVENT_VALUES.postRaceSeconds.defaultValue, [
        Validators.required,
        Validators.min(EVENT_VALUES.postRaceSeconds.minValue),
      ]),
      // TODO session
    });

  }
}
