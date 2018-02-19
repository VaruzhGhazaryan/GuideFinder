import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  show = false;
  header = {
    title: 'Твой личный гид',
    desc: 'Удобное бронирование и оплата экскурсий, информация и отзывы о гиде и экскурсиях, возможность частных или групповых мероприятий.'
  };
  location: Location;

  constructor(router: Router) {}



    ngOnInit() {
    }
    }
