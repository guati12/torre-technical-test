import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-important-message',
  templateUrl: './important-message.component.html',
  styleUrls: ['./important-message.component.scss']
})
export class ImportantMessageComponent {

  constructor(public dialogRef: MatDialogRef<ImportantMessageComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
