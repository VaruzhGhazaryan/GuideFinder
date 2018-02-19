import { Component, OnInit, ElementRef } from '@angular/core';
import { AppSignInComponent } from '../app-sign-in/app-sign-in.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder,  Validators} from '@angular/forms';
import { CaptchaComponent } from 'angular-captcha';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-app-sign-up',
  templateUrl: './app-sign-up.component.html',
  styleUrls: ['./app-sign-up.component.css']
})
export class AppSignUpComponent implements OnInit {
  selected = 'option1';
  constructor(private elementRef: ElementRef,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<AppSignUpComponent>,
              private fb: FormBuilder,
  ) {
    this.signupForm = fb.group({
      'surname': ['', Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])],
      'name': ['',  Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])], // initial value as string
      'password': ['',  Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])], // initial value as string
      'confirmpassword': ['',  Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])], // initial value as string
      'email': ['',  Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator,
        this.validateEmail
      ])], // initial value as string
      'number': ['',  Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])], // initial value as string
      'captcha': ['', Validators.compose([
        Validators.required,
        AppSignInComponent.emptyValidator
      ])]
    });
    this.loginform = fb.group({
      'confirmcode': ['', [AppSignInComponent.emptyValidator]], // initial value as string
    });
  }
  signupForm: FormGroup;
  loginform: FormGroup;
  static isEmpty = false;
  public template: String;
  public listeners: boolean;
  public type: String;
  public number = '+7 999 999-99-99';
  public confirm: boolean;
  public signupemail: boolean;
  public initial: boolean;
  fileNameDialogRef: MatDialogRef<AppSignInComponent>;

  ngOnInit() {
    this.confirm = false;
    this.signupemail = false;
    this.initial = true;
  }
  signUpWithEmail() {
    event.preventDefault();
    event.stopPropagation();
    this.initial = false;
    this.confirm = false;
    this.signupemail = true;
  }
  login() {
    event.preventDefault();
    event.stopPropagation();
    this.dialogRef.close();
    this.fileNameDialogRef = this.dialog.open(AppSignInComponent);
  }
  signUp() {
    event.preventDefault();
    event.stopPropagation();
    this.initial = false;
    this.signupemail = false;
    this.confirm = true;
  }
  validateEmail(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      console.log('gha');
      return null;
    } else {
      return {validateEmail: true};
    }
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
