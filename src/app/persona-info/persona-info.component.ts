import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonInfoService } from '../services/person-info.service';

@Component({
  selector: 'app-persona-info',
  templateUrl: './persona-info.component.html',
  styleUrls: ['./persona-info.component.scss'],
  providers: [PersonInfoService]
})
export class PersonaInfoComponent implements OnInit {

  person : Person = new Person();
  constructor(private personInfoService:PersonInfoService) {
    personInfoService.person.subscribe(data=>{
      this.person = data;
      console.log(this.person)
    })
  }

  ngOnInit(): void {
    this.personInfoService.loadPerson("guati12");
  }

}
