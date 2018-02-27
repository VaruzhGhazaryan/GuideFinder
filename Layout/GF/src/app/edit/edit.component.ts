import {Component} from "@angular/core";


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css', '../account/account.component.css']
})
export class EditComponent {
    today = Date.now();



    constructor() {
    }


}
