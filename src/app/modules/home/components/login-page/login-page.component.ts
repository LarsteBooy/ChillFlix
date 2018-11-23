import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_USER_ROLE } from 'src/app/shared/constants';
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { RxFormBuilder, RxwebValidators, ReactiveFormConfig } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: RxFormBuilder) {
    ReactiveFormConfig.set({
      'validationMessage': {
        'required': 'This field is required',
        'email': 'Should be a valid email',
        'isAllCaps': 'You need to scream your name, use CAPS',
        'contains': 'Your name must be Baggins',
      }
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [RxwebValidators.required(), isAllCaps()]],
      lastName: ['', [RxwebValidators.required(), RxwebValidators.contains({value: 'Baggins'})]],
      email: ['', [RxwebValidators.required(), RxwebValidators.email()]],
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        // SetValue triggers all Validators as if user modified the field.
        // This shows the required error messages even if a user didn't touch the field
        control.setValue(control.value);
      } else if (control instanceof FormGroup) {
        // Iterate over SubFormGroups
        this.validateAllFormFields(control);
      }
    });
  }

  setAdmin(): void {
    localStorage.setItem(LOCAL_STORAGE_USER_ROLE, 'Admin');
    console.log(localStorage.getItem(LOCAL_STORAGE_USER_ROLE));
  }

  checkValue() {
    this.validateAllFormFields(this.registerForm);
    console.log('Register form content is: ', this.registerForm.value);
  }
}

export function isAllCaps(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {

    const regEx = new RegExp('^[A-Z]*?$');
    const isCaps = regEx.test(control.value);
    const result = !isCaps ? {'isAllCaps': { value: control.value }} : null;
    return result;
  };
}
