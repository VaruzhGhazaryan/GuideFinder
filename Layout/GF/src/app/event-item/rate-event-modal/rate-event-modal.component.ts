import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-event-modal',
  templateUrl: './rate-event-modal.component.html',
  styleUrls: ['./rate-event-modal.component.css']
})
export class RateEventModalComponent implements OnInit {
  rating: number;
  constructor() { }

  ngOnInit() {
  }

}
