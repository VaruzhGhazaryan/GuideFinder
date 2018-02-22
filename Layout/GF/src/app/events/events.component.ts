import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [NgbDropdownConfig]
})
export class EventsComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.autoClose = "outside";
  }
  priceRange = [1000000,9000000];
  filters = {
    byRate: false,
    byAsc: false
  };
  option = {
    slideBy : 2,
    dots: false,
    nav: true,
    navText: ['', '' ],
    responsive: {
      '320': {  items: 1 },
      '768': { items: 1 },
      '1200': { items: 1 },
    }
  };
  carusels = [
    {
      h2: 'Популярные мероприятия в этом месяце',
      href: '#!',
      slide: [{
        img: [
          "./assets/img/image.jpg",
          "./assets/img/image.jpg",
          "./assets/img/image.jpg"
        ],
        url: "#!",
        title: "Золотое Кольцо",
        price_for_one: "1500",
        price_for_group: "5000",
        reviews: 7,
        rate: 4,
        like: true,
        label: 'Популярное'
        },
        {
          img: [
            "./assets/img/image.jpg",
          "./assets/img/image.jpg",
          "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Экскурсия по Москве",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false,
          label: 'Новинка'
        },
        {
          img: [
            "./assets/img/image.jpg",
          "./assets/img/image.jpg",
          "./assets/img/image.jpg"],
          url: "#!",
          title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Огни большого города",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Золотое Кольцо",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Экскурсия по Москве",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Огни большого города",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Золотое Кольцо",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Экскурсия по Москве",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Огни большого города",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Золотое Кольцо",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        },
        {
          img: [
            "./assets/img/image.jpg",
            "./assets/img/image.jpg",
            "./assets/img/image.jpg"
          ],
          url: "#!",
          title: "Экскурсия по Москве",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4,
          like: false
        }
      ]
    },
  ];
  ngOnInit() {
  }

}
