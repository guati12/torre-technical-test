import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-important-message',
  templateUrl: './important-message.component.html',
  styleUrls: ['./important-message.component.scss']
})
export class ImportantMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImportantMessageComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
