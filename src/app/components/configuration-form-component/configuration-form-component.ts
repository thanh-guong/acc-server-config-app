import { Component } from '@angular/core';
import { AccConfigurationFormService } from '../../services/acc-configuration-form-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-configuration-form-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
  ],
  templateUrl: './configuration-form-component.html',
  styleUrl: './configuration-form-component.css',
})
export class ConfigurationFormComponent {
  constructor(private formService: AccConfigurationFormService) { }

  get form(): FormGroup {
    return this.formService.form;
  }

  onSubmit(): void {
    alert(JSON.stringify(this.formService.getValue(), null, 2)); // TODO replace with proper save logic
  }
}
