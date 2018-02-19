import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css', '../app-home-content/app-home-content.component.css']
})

export class GuideComponent {
  carusels = [
    {
      h2: 'Мероприятия гида',
      href: '#!',
      slide: [{
        img: "./assets/img/image.jpg",
        url: "#!",
        title: "Золотое Кольцо",
        price_for_one: "1500",
        price_for_group: "5000",
        reviews: 7,
        rate: 4
      },
        {
          img: "./assets/img/image.jpg",
          url: "#!",
          title: "Экскурсия по Москве",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4
        },
        {
          img: "./assets/img/image.jpg",
          url: "#!",
          title: "Обзорная автобусная + \r\n пешеходная к Мавзолею",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4
        },
        {
          img: "./assets/img/image.jpg",
          url: "#!",
          title: "Огни большого города",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4
        },
        {
          img: "./assets/img/image.jpg",
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4
        },
        {
          img: "./assets/img/image.jpg",
          url: "#!",
          title: "Киностудия Мосфильм",
          price_for_one: "1500",
          price_for_group: "5000",
          reviews: 7,
          rate: 4
        }
      ]


    },
  ];
  option = {
    slideBy : 2,
    dots: false,
    nav: true,
    navText: ['', '' ],
    responsive: {
      '320': {  items: 2 },
      '768': { items: 3 },
      '1200': { items: 5 },
    }
  };

  constructor() { }

}
