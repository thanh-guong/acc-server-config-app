import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AccConfiguration } from '../models/acc-configuration.model';

@Injectable({ providedIn: 'root' })
export class AccConfigurationFormService {
  form: FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      udpPort: this.fb.control(9600, [ // TODO constants
        Validators.required,
        Validators.min(1), // TODO constants
        Validators.max(65535), // TODO constants
      ]),
      tcpPort: this.fb.control(9600, [ // TODO constants
        Validators.required,
        Validators.min(1), // TODO constants
        Validators.max(65535), // TODO constants
      ]),
      maxConnections: this.fb.control(10, [ // TODO constants
        Validators.required,
        Validators.min(1), // TODO constants
        Validators.max(1000), // TODO constants
      ]),
      lanDiscovery: this.fb.control<0 | 1>(1),
      registerToLobby: this.fb.control<0 | 1>(1),
      publicIP: this.fb.control<string | undefined>(undefined),
      configVersion: this.fb.control(1, Validators.required),
    });
  }
  
  getValue(): AccConfiguration {
    return this.form.getRawValue() as AccConfiguration;
  }
}
