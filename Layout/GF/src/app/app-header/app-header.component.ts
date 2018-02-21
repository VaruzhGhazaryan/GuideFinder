import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

const texts = ['text1', 'text2', 'text3'];

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.css', '../header-search/header-search.component.css']
})
export class AppHeaderComponent implements OnInit {


    show = false;
    header = {
        title: 'Твой личный гид',
        desc: 'Удобное бронирование и оплата экскурсий, информация и отзывы о гиде и экскурсиях, возможность частных или групповых мероприятий.'
    };

    public model: any;

    //noinspection TypeScriptUnresolvedFunction
    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 1 ? []
                : texts.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

    location: Location;

    constructor(router: Router) {
    }


    ngOnInit() {
    }
}
