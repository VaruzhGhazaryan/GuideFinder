import { Component, OnInit } from '@angular/core';
import { ChargeSuccessComponent } from '../charge-success/charge-success.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-charge-event',
  templateUrl: './charge-event.component.html',
  styleUrls: ['./charge-event.component.css']
})
export class ChargeEventComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ChargeEventComponent>
  ) { }
  successChargetDialog: MatDialogRef<ChargeSuccessComponent>;

  ngOnInit() {
  }
  openSuccessChargetDialog() {
    this.dialogRef.close();
    this.successChargetDialog = this.dialog.open(ChargeSuccessComponent);
  }

}
