import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';

export abstract class BaseFormService<T, B extends FormBuilder | NonNullableFormBuilder> {
  form: FormGroup;

  constructor(protected fb: B) {
    this.form = this.buildFormGroup();
  }

  protected abstract buildFormGroup(): FormGroup;

  getValue(): T {
    return this.form.getRawValue() as T;
  }
}
