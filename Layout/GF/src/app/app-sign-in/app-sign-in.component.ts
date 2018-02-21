import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { AppSignUpComponent } from '../app-sign-up/app-sign-up.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-app-sign-in',
  templateUrl: './app-sign-in.component.html',
  styleUrls: ['./app-sign-in.component.css']
})
export class AppSignInComponent implements OnInit {
  //noinspection JSAnnotator
  constructor(private fb: FormBuilder,
    private elementRef: ElementRef,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AppSignInComponent>) {
    this.loginForm = fb.group({
      email: ['', [AppSignInComponent.emptyValidator]], // initial value as string
      password: ['', [AppSignInComponent.emptyValidator]]  // initial value as array
    });
  }

  loginForm: FormGroup;
  //noinspection JSAnnotator
  signUpDialogRef: MatDialogRef<AppSignUpComponent>;

  static emptyValidator(control: FormControl) {
    if (!control.value || control.value === '') {
      return {isEmpty: true};
    }
    return;
  }


  ngOnInit() {

  }
}
