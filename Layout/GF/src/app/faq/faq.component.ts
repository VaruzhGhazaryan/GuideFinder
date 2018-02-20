import { Component, OnInit, ElementRef } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  infoObject: any;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.infoObject = [
      {
        'title': 'Как работают отзывы?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,
         'id': 1
      },
      {
        'title': 'Что такое рекомендации на UrPG?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,
        'id': 2
      },
      {
        'title': 'Можно ли удалить отзыв или ответить на отзыв, с которым я не согласен?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false, 'id': 3
      },
      {
        'title': 'Безопасно ли предоставлять документы на UrPG?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,

      },
      {
        'title': 'Как мне подтвердить свои номер телефона?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,

      },
      {
        'title': 'Что такое рекомендация на UrPG?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,

      },
      {
        'title': 'Можно ли удалить отзыв или ответить на отзыв, с которым я не согласен?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,

      },
      {
        'title': 'Безопасно ли предоставлять документы на UrPG?',
        'description': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
        'isopen': false,

      }
    ];
  }



  showHideMessage(targetID) {

    var thisElementMessage = document.querySelector("#faqAnswer"+targetID)

    if (thisElementMessage.style.display == "none") {
      thisElementMessage.style.display = "inline";
    } else {
      thisElementMessage.style.display = "none";
    }
    }

}
