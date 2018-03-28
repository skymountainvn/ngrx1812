import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['', gmail],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }
  
  onSubmitForm() {
    console.log(this.formSignUp.value);
  }

  getShouldShowEmailWarning(controlName) {
    const emailControl = this.formSignUp.get(controlName);
    return emailControl.invalid && emailControl.touched;
  }
}

function gmail(control: AbstractControl): ValidationErrors | null {
  if ((control.value as string).trim().endsWith('@gmail.com')) return null;
  return { error: 'gmail' };

}
