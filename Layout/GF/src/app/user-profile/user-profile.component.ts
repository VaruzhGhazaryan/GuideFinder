import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  defaultPhotoPath = './assets/img/default_avatar.png';
  user = {
    photoPath: './assets/img/user_image.png',
    fullname: 'Наумов Сергей Иванович',
    birthday: '20 февраля 1988 года',
    sex: 'Mужской',
    email: 'krutoiGit@gmail.com',
    phone: '8 (538) 284 48 48',
    currency: 'Рубль',
    address: 'Россия, москва',
    socials: [
      {
        name: 'vk',
        url:  'https://vk.com/'},
      {
        name: 'facebook',
        url:  'https://www.facebook.com/'},
      {
        name: 'odnoklassniki',
        url:  'https://ok.ru/'},
      {
        name: 'instagram',
        url:  'https://www.instagram.com/'},
    ]
  };
  ngOnInit() {
  }

}
