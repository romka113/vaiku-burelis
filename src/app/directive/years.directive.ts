import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[year]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: YearsDirective,
      multi: true,
    },
  ],
})
export class YearsDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let v: Date = new Date(`${control.value}`);
    let time = new Date();

    if (time.getTime() > v.getTime()) {
      return null;
    } else {
      return { error: 'klaida' };
    }

    return null;
  }
}
