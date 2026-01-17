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

  hasError(controlName: string): boolean {
    return this.formService.hasError(controlName);
  }

  getI18nKeyErrorMessage(controlName: string): { key: string; params?: Record<string, any>; } | null {
    return this.formService.getI18nKeyErrorMessage(controlName);
  }

  protected abstract onSubmit(): void;
}
