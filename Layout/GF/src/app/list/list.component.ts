import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css', '../account/account.component.css']
})
export class ListComponent implements OnInit {

    last_events = [
        {
            h2: 'Прошедшие Мероприятия',
            href: '#!',
            slide: [{
                img: "./assets/img/image.jpg",
                url: "#!",
                title: "Золотое Кольцо",
                price: "12 500",
                date: "18 февраля 2018",
                time: "16:00"
            },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Экскурсия по Москве",
                    price: "15 500",
                    date: "16 февраля 2018",
                    time: "17:00"
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
                    price: "5 800",
                    date: "18 февраля 2018",
                    time: "08:00"
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Огни большого города",
                    price: "55 500",
                    date: "12 февраля 2018",
                    time: "16:00"
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price: "22 600",
                    date: "08 февраля 2018",
                    time: "12:00"
                },
                {
                    img: "./assets/img/image.jpg",
                    url: "#!",
                    title: "Киностудия Мосфильм",
                    price: "12 500",
                    date: "05 февраля 2018",
                    time: "09:00"
                }
            ]
        }

    ];
    constructor() {

    }

    ngOnInit() {
    }

}
