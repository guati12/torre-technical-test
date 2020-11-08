import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonInfoService } from '../services/person-info.service';
import { MatDialog } from '@angular/material/dialog';
import { ImportantMessageComponent } from '../important-message/important-message.component';

@Component({
  selector: 'app-persona-info',
  templateUrl: './persona-info.component.html',
  styleUrls: ['./persona-info.component.scss'],
  providers: [PersonInfoService]
})
export class PersonaInfoComponent implements OnInit {

  person : Person = new Person();
  constructor(private personInfoService:PersonInfoService,
    public dialog: MatDialog) {
    personInfoService.person.subscribe(data=>{
      this.person = data;
      //add flag to tell that yo find in torre
      this.person.experiences[0].isByTorre = true;
      console.log(this.person)
    });
  }

  ngOnInit(): void {
    this.personInfoService.loadPerson("guati12");
    this.personInfoService.islocal.subscribe(data=>{
      if(data){
        this.openDialog()
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImportantMessageComponent, {
      width: '70%'
    });
  }

}
