import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {
  constructor() { }
  login = true;
  events = [
    {
      h2: 'Предстоящие мероприятия',
      href: '#!',
        slide: [{
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Золотое Кольцо',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Экскурсия по Москве',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Обзорная автобусная + \r\n пешеходная к Мавзолею',
          date: '01 февраля 2018, 16:00',
          location: 'Санкт-Петербург'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Огни большого города',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          date: '01 февраля 2018, 16:00',
          location: 'Санкт-Петербург'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        }
      ]
    },
  ];

  past_events = [
    {
      h2: 'Прошедшие мероприятия',
      href: '#!',
        slide: [{
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Золотое Кольцо',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Экскурсия по Москве',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Обзорная автобусная + \r\n пешеходная к Мавзолею',
          date: '01 февраля 2018, 16:00',
          location: 'Санкт-Петербург'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Огни большого города',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          date: '01 февраля 2018, 16:00',
          location: 'Санкт-Петербург'
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          date: '01 февраля 2018, 16:00',
          location: 'Москва'
        }
      ]
    },
  ];

  last_viewed_events = [
    {
      h2: 'Недавно просмотренные мероприятия',
      href: '#!',
      slide: [{
        img: './assets/img/image.jpg',
        url: '#!',
        title: 'Золотое Кольцо',
        price_for_one: '1500',
        price_for_group: '5000',
        reviews: 7,
        rate: 4
      },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Экскурсия по Москве',
          price_for_one: '1500',
          price_for_group: '5000',
          reviews: 7,
          rate: 4
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Обзорная автобусная + \r\n пешеходная к Мавзолею',
          price_for_one: '1500',
          price_for_group: '5000',
          reviews: 7,
          rate: 4
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Огни большого города',
          price_for_one: '1500',
          price_for_group: '5000',
          reviews: 7,
          rate: 4
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          price_for_one: '1500',
          price_for_group: '5000',
          reviews: 7,
          rate: 4
        },
        {
          img: './assets/img/image.jpg',
          url: '#!',
          title: 'Киностудия Мосфильм',
          price_for_one: '1500',
          price_for_group: '5000',
          reviews: 7,
          rate: 4
        }
      ]
    },
  ];

  option = {
    slideBy: 2,
    dots: false,
    nav: true,
    navText: ['', ''],
    responsive: {
      '320': {items: 1},
      '480': {items: 2},
      '768': {items: 3},
      '1200': {items: 5},
    }
  };
  ngOnInit() {
  }

}
