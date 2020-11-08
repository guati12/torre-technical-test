import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-idea-message',
  templateUrl: './idea-message.component.html',
  styleUrls: ['./idea-message.component.scss']
})
export class IdeaMessageComponent{

  constructor(public dialogRef: MatDialogRef<IdeaMessageComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
