import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }
  option = {
    slideBy: 2,
    dots: false,
    nav: true,
    navText: ['', ''],
    responsive: {
      '320': {items: 1},
      '768': {items: 2},
      '1200': {items: 2},
    }
  };

  slides: ['./assets/img/image.jpg','./assets/img/image.jpg'];
  ngOnInit() {
  }

}
