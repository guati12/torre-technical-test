import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../models/person';

@Injectable({ providedIn: 'root' })
export class PersonInfoService{

  person = new Subject<Person>();

  constructor(private http: HttpClient) {
  }

  loadPerson(user:string){
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });

    this.http.get<Person>(
      "/api/bios/"+user,
      {headers}
      ).toPromise().then(
        (data)=>{this.person.next(data);}
      );
  }

}
