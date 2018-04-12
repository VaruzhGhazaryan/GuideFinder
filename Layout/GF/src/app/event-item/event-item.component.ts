import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BookProvidenceComponent} from './book-providence/book-providence.component';
import {RateEventModalComponent} from './rate-event-modal/rate-event-modal.component';
import {ScheduleModalComponent} from './schedule-modal/schedule-modal.component';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  event = {
    title: 'Огни большого города',
    like: false,
    review: 7,
    rate: 4
  };
  gallery = [
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
    '../assets/img/slide-image.jpg',
  ];
  option = {
    slideBy : 4,
    dots: false,
    nav: true,
    navText: ['', '' ],
    responsive: {
      '320': {items: 1},
      '768': { items: 1 },
      '1200': { items: 4 },
    }
  };
  constructor(private dialog: MatDialog) { }

  BookProvidenceDialog: MatDialogRef<BookProvidenceComponent>;
  RateEventModalDialog: MatDialogRef<RateEventModalComponent>;
  ScheduleModalDialog: MatDialogRef<ScheduleModalComponent>;
  // event handlers
  openBookProvidenceDialog() {
    this.BookProvidenceDialog = this.dialog.open(BookProvidenceComponent);
  }
  openRateEventModalDialog() {
    this.RateEventModalDialog = this.dialog.open(RateEventModalComponent);
  }
  openScheduleModalDialog() {
    this.ScheduleModalDialog = this.dialog.open(ScheduleModalComponent);
  }
  ngOnInit() {
  }
}
