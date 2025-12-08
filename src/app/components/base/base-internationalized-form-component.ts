import { FormGroup } from '@angular/forms';
import { BaseFormService } from '../../services/base-form-service';
import { BaseInternationalizedComponent } from '../base/base-internationalized-component';

export abstract class BaseInternationalizedFormComponent<TModel, TService extends BaseFormService<TModel, any>> extends BaseInternationalizedComponent {

  constructor(protected formService: TService) {
    super();
  }

  get form(): FormGroup {
    return this.formService.form;
  }

  getValue(): TModel {
    return this.formService.getValue();
  }

  protected abstract onSubmit(): void;
}
