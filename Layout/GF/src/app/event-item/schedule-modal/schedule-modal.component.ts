import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BookProvidenceComponent} from '../book-providence/book-providence.component';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.css']
})
export class ScheduleModalComponent implements OnInit {
  calendar = [
    {events: [3, 5, 18], year: 1018, month: 2, date: new Date(544654654654654)},
    {events: [5, 24, 25], year: 1018, month: 3, date: new Date(544654654654654)},
    {events: [5, 24, 25], year: 1018, month: 3, date: new Date(544654654654654)},
  ];
  model: NgbDateStruct;
  option = {
    slideBy: 2,
    dots: false,
    nav: true,
    navText: ['', ''],
    responsive: {
      '320': {items: 1},
      '768': {items: 1},
      '1200': {items: 2},
    }
  };
  change() {

  }

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ScheduleModalComponent>) { }
  ngOnInit() {
  }
  BookProvidenceDialog: MatDialogRef<BookProvidenceComponent>;
  // event handlers
  openBookProvidenceDialog() {
    this.BookProvidenceDialog = this.dialog.open(BookProvidenceComponent);
    this.dialogRef.close();

  }
}
