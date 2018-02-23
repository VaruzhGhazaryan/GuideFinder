import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {NgbDropdownConfig} from "@ng-bootstrap/ng-bootstrap";

const texts = ["LOREM", "IPSUM", "IS", "SIMPLY", "DUMMY", "TEXT", "OF", "THE", "PRINTING", "AND", "TYPESETTING", "INDUSTRY", "LOREM", "IPSUM", "HAS", "BEEN", "THE", "STANDARD", "DUMMY"];

@Component({
    selector: 'app-header-search',
    templateUrl: './header-search.component.html',
    styleUrls: ['./header-search.component.css'],
    providers: [NgbDropdownConfig]
})
export class HeaderSearchComponent implements OnInit {

    show = false;

    public model: any;

    //noinspection TypeScriptUnresolvedFunction
    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 1 ? []
                : texts.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

    constructor(config: NgbDropdownConfig) {
        config.autoClose = "outside";
    }

    ngOnInit() {
    }

}
