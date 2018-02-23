import {Component} from "@angular/core";
import { MatDialog, MatDialogRef } from '@angular/material';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from '../list/list.component';
import { EditComponent } from '../edit/edit.component';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css', '../app-home-content/app-home-content.component.css']
})
export class AccountComponent {



    events = [
        {
            h2: 'Мои Мероприятия',
            href: '#!',
            slide: [{
                img: "./assets/img/image.jpg",
                url: "#!",
                title: "Золотое Кольцо",
                price_for_one: "1500",
                price_for_group: "5000",
                price_for_team: "1000",


            },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Экскурсия по Москве",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
                    price_for_one: "1500",
                    price_for_group: "5000", price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Огни большого города",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                }
            ]


        },
    ];

    cal_events = [
        {
            h2: 'Календарь Мероприятия',
            href: '#!',
            slide: [{
                img: "./assets/img/image.jpg",
                url: "#!",
                title: "Золотое Кольцо",
                price_for_one: "1500",
                price_for_group: "5000",
                price_for_team: "1000",


            },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Экскурсия по Москве",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Огни большого города",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price_for_one: "1500",
                    price_for_group: "5000",
                    price_for_team: "1000",


                }
            ]


        },
    ];
    last_events = [
        {
            h2: 'Прошедшие Мероприятия',
            href: '#!',
            slide: [{
                img: "./assets/img/image.jpg",
                url: "#!",
                title: "Золотое Кольцо",
                price: "12 500",
                date: "18 февраля 2018, 16:00",
            },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Экскурсия по Москве",
                    price: "15 500",
                    date: "16 февраля 2018, 16:00",
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
                    price: "5 800",
                    date: "18 2018, 08: 00",
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Огни большого города",
                    price: "55 500",
                    date: "12 февраля 2018, 16:00",
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price: "22 600",
                    date: "08 февраля 2018, 16:00",
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price: "12 500",
                    date: "05 февраля 2018, 17:00",
                }
            ]
        }

    ];
    option = {
        slideBy: 2,
        dots: false,
        nav: true,
        navText: ['', ''],
        responsive: {
            '320': {items: 2},
            '768': {items: 3},
            '1200': {items: 5},
        }
    };

    option_cal = {
        slideBy: 2,
        dots: false,
        nav: true,
        navText: ['', ''],
        responsive: {
            '320': {items: 2},
            '768': {items: 2},
            '1200': {items: 3},
        }
    };

    constructor(private dialog: MatDialog) { }

    //noinspection JSAnnotator
    listDialog: MatDialogRef<ListComponent>;
    //noinspection JSAnnotator
    editDialog: MatDialogRef<EditComponent>;

    openListDialog() {
        this.listDialog = this.dialog.open(ListComponent);
    }

    openEditDialog() {
        this.editDialog = this.dialog.open(EditComponent);
    }

    openAddDialog() {
        this.editDialog = this.dialog.open(AddEventComponent);
    }

}
