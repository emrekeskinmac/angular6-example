import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../../services';

import { TabStripComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('tabstrip')
  public tabstrip: TabStripComponent;

  signInForm: FormGroup;
  signUpForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

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
      ])],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get loginFormData() { return this.signInForm.controls; }


  onSignIn() {

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    console.log(this.signInForm.value);
    this.authenticationService.login(this.loginFormData.username.value, this.loginFormData.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          alert(error);
        });
  }

  onSignUp() {

    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);
    this.userService.create(this.signUpForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.tabstrip.selectTab(0);
        },
        (error: any) => {
          alert(error);
        });
  }
}
