import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  formSignIn: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: '',
      password: ''
    });
  }

}
