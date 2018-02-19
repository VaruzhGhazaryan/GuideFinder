import {Component} from '@angular/core';
import {Location} from '@angular/common';

declare var jquery: any;
declare var $: any;

import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RoutesRecognized
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show = false;
  title = 'Guide Finder';
  public location: Router;

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/blog' || event.url === '/blog-item' || event.url === '/faq' || event.url === '/guide') {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    });
  }
}

//   constructor(private  _router: Router) {
//     this.location = _router;
//    }
// }

