import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', '../account/account.component.css']
})
export class EditComponent implements OnInit {
  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
