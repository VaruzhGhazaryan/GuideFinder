import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: 'app-home-content.component.html',
  styleUrls: ['app-home-content.component.css'],

})
export class AppHomeContentComponent {
  carusels = [
    {
    h2: 'Популярные мероприятия в этом месяце',
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
    {
    h2: 'Последние забронированные',
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
    {
      h2: 'обзорные экскурсии',
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
    {
      h2: 'история и архитектура',
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
    {
      h2: 'музеи и выставки',
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
    {
      h2: 'уникальный опыт',
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
    {
      h2: 'гастрономия',
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
    {
      h2: 'местный колорит',
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
    {
      h2: 'шоппинг',
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
    {
      h2: 'необычные экскурсии',
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
