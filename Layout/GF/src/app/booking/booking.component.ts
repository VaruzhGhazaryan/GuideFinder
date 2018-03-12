import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }
  options = [
    {
      title: 'Переводчик',
      price: 1000,
      checked: true
    },
    {
      title: 'Аренда транспорта',
      price: 800,
      checked: false
    },
    {
      title: 'Шоппинг консультант',
      price: 1500,
      checked: true
    },
    {
      title: 'Переводчик',
      price: 2000,
      checked: false
    },
    {
      title: 'Шоппинг консультант',
      price: 5000,
      checked: true
    },
    {
      title: 'Аренда транспорта',
      price: 3500,
      checked: true
    },
  ];

  ngOnInit() {
  }

}
