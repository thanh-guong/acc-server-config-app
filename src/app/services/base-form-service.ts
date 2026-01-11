import { AbstractControl, FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FORM_ERROR_MESSAGES_I18N_KEYS } from '../ui-feedback-messaging/ui-error-messages';

export abstract class BaseFormService<T, B extends FormBuilder | NonNullableFormBuilder> {
  form: FormGroup;

  constructor(protected fb: B) {
    this.form = this.buildFormGroup();
  }

  protected abstract buildFormGroup(): FormGroup;

  getValue(): T {
    return this.form.getRawValue() as T;
  }

  getControl(name: string): AbstractControl | null {
    return this.form.get(name);
  }

  hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getI18nKeyErrorMessage(controlName: string): string | null {
    const control = this.getControl(controlName);

    if (!control || !control.errors || !(control.dirty || control.touched)) {
      return null;
    }

    const errorKey = Object.keys(control.errors)[0];
    const errorValue = control.errors[errorKey];

    return FORM_ERROR_MESSAGES_I18N_KEYS[errorKey]?.(errorValue) ?? null;
  }
}
