import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.signUpForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')
        ]) ],
        password: ['', Validators.required]
    });
  }

  get loginFormData() { return this.signInForm.controls; }

  onSignIn() {

    // stop here if form is invalid
    if (this.signInForm.invalid) {
        return;
    }
    console.log(this.signInForm.value)

  }

  onSignUp() {

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }

    console.log(this.signUpForm.value)

  }

}
