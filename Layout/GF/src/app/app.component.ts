import {Component} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

declare var jquery: any;
declare var $: any;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    show = false;
    login = false;
    title = 'Guide Finder';
    public location: Router;

    constructor(router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                switch (event.url) {
                  case '' : this.show = false; break;
                  case '/' : this.show = false; break;
                  case '/home' : this.show = false; break;
                  case '/account' : this.show = true; this.login = true; break;
                  case '/about' : this.show = true; this.login = true; break;
                  case '/booking' : this.show = true; this.login = true; break;
                  case '/events-view' : this.show = true; this.login = true; break;
                  case '/event-item' : this.show = true; this.login = true; break;
                  default : this.show = true; this.login = false; break;
                }
            }
        });
    }
}

//   constructor(private  _router: Router) {
//     this.location = _router;
//    }
// }

