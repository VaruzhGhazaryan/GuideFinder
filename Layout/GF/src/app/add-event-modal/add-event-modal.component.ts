import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event-modal.component.html',
  styleUrls: ['add-event-modal.component.css', '../account/account.component.css']
})
export class AddEventModalComponent implements OnInit {
  today = Date.now();

  displayMonths = 2;
  navigation = 'select';

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


  constructor() {
  }

  ngOnInit() {
  }

}
