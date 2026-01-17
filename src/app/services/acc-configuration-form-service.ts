import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AccConfiguration } from '../models/acc-configuration.model';
import { ACC_CONFIGURATION_VALUES } from '../../const/form-values-const';
import { BaseFormService } from './base-form-service';
import { integerPatternValidator, ipv4Validator } from '../validators/pattern-validators';

@Injectable({ providedIn: 'root' })
export class AccConfigurationFormService extends BaseFormService<AccConfiguration, NonNullableFormBuilder> {

  constructor(fb: NonNullableFormBuilder) {
    super(fb);
  }

  override buildFormGroup(): FormGroup {
    return this.fb.group({
      udpPort: this.fb.control(ACC_CONFIGURATION_VALUES.udpPort.defaultValue, [
        Validators.required,
        Validators.min(ACC_CONFIGURATION_VALUES.udpPort.minValue),
        Validators.max(ACC_CONFIGURATION_VALUES.udpPort.maxValue),
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
      tcpPort: this.fb.control(ACC_CONFIGURATION_VALUES.tcpPort.defaultValue, [
        Validators.required,
        Validators.min(ACC_CONFIGURATION_VALUES.tcpPort.minValue),
        Validators.max(ACC_CONFIGURATION_VALUES.tcpPort.maxValue),
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
      maxConnections: this.fb.control(ACC_CONFIGURATION_VALUES.maxConnections.defaultValue, [
        Validators.required,
        Validators.min(ACC_CONFIGURATION_VALUES.maxConnections.minValue),
        Validators.max(ACC_CONFIGURATION_VALUES.maxConnections.maxValue),
        integerPatternValidator({allowZero: false, allowNegative: false}),
      ]),
      lanDiscovery: this.fb.control<0 | 1>(ACC_CONFIGURATION_VALUES.lanDiscovery.defaultValue as 0 | 1, Validators.required),
      registerToLobby: this.fb.control<0 | 1>(ACC_CONFIGURATION_VALUES.registerToLobby.defaultValue as 0 | 1, Validators.required),
      publicIP: this.fb.control<string | undefined>(ACC_CONFIGURATION_VALUES.publicIP.defaultValue, [
          ipv4Validator(),
        ],
      ),
      configVersion: this.fb.control(ACC_CONFIGURATION_VALUES.configVersion.defaultValue, [
        Validators.required,
        integerPatternValidator({allowZero: true, allowNegative: false}),
      ]),
    });
  }
}
