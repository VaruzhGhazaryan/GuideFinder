import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

import { AppSignInComponent } from '../app-sign-in/app-sign-in.component';
import { AppSignUpComponent} from '../app-sign-up/app-sign-up.component';
@Component({
  selector: 'app-app-inline-navbar',
  templateUrl: './app-inline-navbar.component.html',
  styleUrls: ['./app-inline-navbar.component.css']
})
export class AppInlineNavbarComponent implements OnInit {
  show = false;
  login = false;
  beGuide = true;
  menu = {
    'blog': 'Блог',
    'guide': 'Стать гидом',
    'signin': 'Войти',
    'signup': 'Регистрация',
  };

  //noinspection JSAnnotator
  signInDialog: MatDialogRef<AppSignInComponent>;
  //noinspection JSAnnotator
  signUpDialog: MatDialogRef<AppSignUpComponent>;

  constructor(private dialog: MatDialog, router: Router) { }


  openSignInDialog() {
    this.signInDialog = this.dialog.open(AppSignInComponent);
  }
  openSignUpDialog() {
    this.signUpDialog = this.dialog.open(AppSignUpComponent);
  }

  ngOnInit() {
    if (location.pathname === '/blog'  ||  location.pathname === '/blog-item' ||  location.pathname === '/faq') {
      this.show = true;
    }
    if (location.pathname === '/account' || location.pathname === '/events-view') {
      this.login = true;
    }
    if (location.pathname === '/user-profile' || location.pathname === '/edit-user-profile') {
      this.beGuide = false;
      this.login = true;
    }
  }
}
