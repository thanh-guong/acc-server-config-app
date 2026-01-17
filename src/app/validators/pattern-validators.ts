import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PATTERN_NAMES } from '../../const/pattern-const';

const IPV4_REGEX = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

interface IntegerPatternOptions {
  allowZero?: boolean;
  allowNegative?: boolean;
}

export function integerPatternValidator(options: IntegerPatternOptions = {}): ValidatorFn {
  const {
    allowZero = true,
    allowNegative = false,
  } = options;

  let regex: RegExp;

  if (allowNegative && allowZero) {
    // -10, -1, 0, 1, 10
    regex = /^-?(0|[1-9]\d*)$/;
  } else if (allowNegative && !allowZero) {
    // -10, -1, 1, 10
    regex = /^-?[1-9]\d*$/;
  } else if (!allowNegative && allowZero) {
    // 0, 1, 10
    regex = /^(0|[1-9]\d*)$/;
  } else {
    // 1, 10
    regex = /^[1-9]\d*$/;
  }

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    return regex.test(value) ? null : { [PATTERN_NAMES.INTEGER]: true };
  };
}

export function ipv4Validator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return IPV4_REGEX.test(value) ? null : { [PATTERN_NAMES.IPV4]: true };
  };
}
