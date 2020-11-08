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
    try {
      this.http.get("/api/bios/"+user,{headers,observe: "response"})
      .toPromise().then((data)=>{
        if(data.status == 200){
          console.warn("->Consume API")
          this.person.next(data.body);
        }else{
          console.error("->Not Consume API, swich to local Data....")
          this.personOffLoad();
        }
      });
    }
    catch(e) {
      console.error("->Not Consume API, swich to local Data...."+e)
          this.personOffLoad();
    }
  }

  personOffLoad(){
    this.person.next({
      "person": {
          "professionalHeadline": "Desarrollador de software",
          "completion": 0.5556,
          "showPhone": false,
          "created": new Date("2020-08-07T22:38:54Z"),
          "verified": true,
          "flags": {
              "benefits": true,
              "canary": false,
              "enlauSource": false,
              "fake": false,
              "featureDiscovery": true,
              "getSignaledBenefitsViewed": false,
              "firstSignalSent": true,
              "promoteYourselfBenefitsViewed": false,
              "promoteYourselfCompleted": false,
              "importingLinkedin": false,
              "onBoarded": true,
              "remoter": true,
              "signalsFeatureDiscovery": true,
              "signedInToOpportunities": true,
              "importingLinkedinRecommendations": true,
              "contactsImported": true,
              "appContactsImported": false,
              "genomeCompletionAcknowledged": false
          },
          "weight": 419.6117,
          "locale": "es",
          "subjectId": "602994",
          "picture": "https://starrgate.s3.amazonaws.com:443/users/4ffbd52ca2b9605ada31a24f94e0a11879e62ca1/profile_mczdgGB.jpg",
          "hasEmail": true,
          "name": "Juan Sebastian Guatibonza Ordoñez",
          "links": [
              {
                  "id": "8jpXAP9j",
                  "name": "",
                  "address": "https://www.notion.so/Sebastian-Guatibonza-687df9e4dbdd4a05b48181791d61cf26"
              },
              {
                  "id": "OMv9Xk9N",
                  "name": "linkedin",
                  "address": "https://www.linkedin.com/in/sebastian-guatibonza-1aa6291a2/"
              },
              {
                  "id": "XMq0pG9N",
                  "name": "facebook",
                  "address": "https://facebook.com/jguatibonza"
              }
          ],
          "location": {
              "name": "Bogotá, Colombia",
              "shortName": "Bogotá, Colombia",
              "latitude": 4.7109886,
              "longitude": -74.072092,
              "timezone": "America/Bogota",
              "timezoneOffSet": -18000000
          },
          "theme": "cyan200",
          "id": "gMRxDBPy",
          "pictureThumbnail": "https://starrgate.s3.amazonaws.com:443/CACHE/images/users/4ffbd52ca2b9605ada31a24f94e0a11879e62ca1/profile_mczdgGB/b4434f8ca42037e4eb8dfa24960da648.jpg",
          "claimant": false,
          "summaryOfBio": "I've been programming since 2009, ❤ I love to learn new things and improve my skills everyday \n\nMy most outstanding achievements are the following:\n\n- I created a solution for the biggest flower company in Colombia to measure the time of production of the bouquets, including dead times like bathroom time or lunch time. for more than 200 persons this solution is creating around 20000 records per day, is developed in Net Core and Angular technology using SQLServer database.\n- I worked as a subcontractor to \"Ministerio de las TIC\" this is the ministry of telecommunication in Colombia. I did the platform for the blind community. the platform is been online since 2012 and it has around 800.000 [downloads. It](http://downloads.it/) works with JSF technology and PostgreSQL database.\n- I was part of the team that developed a reading machine for blind people, this machine had functionalities like a basic computer, you can receive and sent emails, scan physical documents and save them in a word file, convert text to voice, among other thinks and it didn’t have screen. we used Ruby technology.",
          "weightGraph": "https://hcti.io/v1/image/017be7c6-7508-4d48-9e4b-cf5ab4c075b9",
          "publicId": "guati12"
      },
      "experiences": [
          {
              "id": "xM96QoPj",
              "category": "jobs",
              "name": "Junior programmer",
              "organizations": [
                  {
                      "id": 501179,
                      "name": "Soluciones integrales VER SAS EP",
                      "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1604204420/origin/bio/organizations/hkxdprbhc8ao7i3xdugl.jpg"
                  }
              ],
              "responsibilities": [],
              "fromMonth": "February",
              "fromYear": "2012",
              "toMonth": "July",
              "toYear": "2013",
              "remote": true,
              "additionalInfo": "- Platform download for the blind community in JavaServerFaces.\n- Design, creation and support of the database in PostgreSQL.\n- Network infrastructure management and settings.\n- Management and adjustment of computer equipment infrastructure.",
              "highlighted": true,
              "weight": 0,
              "verifications": 0,
              "recommendations": 0,
              "media": [],
              "rank": 1
          },
          {
              "id": "pyoG9Xvy",
              "category": "jobs",
              "name": "Junior programmer",
              "organizations": [
                  {
                      "id": 398925,
                      "name": "Champion Air Cargo De Colombia"
                  }
              ],
              "responsibilities": [],
              "fromMonth": "February",
              "fromYear": "2010",
              "toMonth": "April",
              "toYear": "2011",
              "remote": false,
              "additionalInfo": "- Supervision of the operation of the company's servers where the mail system and telephone plants were hosted.\n- Creation of new modules for the company system.\n- Supervision of the development groups, by the technical area of the company.\n- Maintenance and creation of database reports in MySQL, PostgreSQL and Oracle.\n- Correction of errors in production.\n- Maintenance of the program created in the company in PHP.",
              "highlighted": true,
              "weight": 0,
              "verifications": 0,
              "recommendations": 0,
              "media": [],
              "rank": 2
          },
          {
              "id": "Vjw7q02j",
              "category": "jobs",
              "name": "Junior programmer - Web developer",
              "organizations": [
                  {
                      "id": 471950,
                      "name": "Recored",
                      "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1602904622/origin/bio/organizations/xigilr3amlocuibdfjtl.jpg"
                  }
              ],
              "responsibilities": [],
              "fromMonth": "September",
              "fromYear": "2014",
              "toMonth": "February",
              "toYear": "2016",
              "remote": false,
              "additionalInfo": "- Survey of requirements for the creation of a Collection Management platform.\n- Creation of collection management platform.\n- Administrative panel coding of collection routes.\n- Mobile app creation for collection requests.",
              "highlighted": true,
              "weight": 0,
              "verifications": 1,
              "recommendations": 0,
              "media": [
                  {
                      "group": "e121478f-7e7c-485c-b826-e2c9d5d33abc",
                      "mediaType": "media",
                      "description": "",
                      "mediaItems": [
                          {
                              "id": "Vjwxx4y4",
                              "address": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1602014214/origin/bio/experiences/401a0a49-e8b9-4ebb-8d55-b8c73029aa49_ysuw8d.jpg",
                              "metadata": "{\"width\":1001,\"height\":1000,\"orientation\":-1,\"focalPointX\":0.5,\"focalPointY\":0.5}"
                          }
                      ]
                  }
              ],
              "rank": 3
          },
          {
              "id": "pyJ8mvPM",
              "category": "jobs",
              "name": "IT Director – Senior Developer",
              "organizations": [
                  {
                      "id": 501179,
                      "name": "Soluciones integrales VER SAS EP",
                      "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1604204420/origin/bio/organizations/hkxdprbhc8ao7i3xdugl.jpg"
                  }
              ],
              "responsibilities": [],
              "fromMonth": "March",
              "fromYear": "2016",
              "toMonth": "October",
              "toYear": "2018",
              "remote": false,
              "additionalInfo": "- Creation of the company's website.\n- I was part of the team that development of consumer products for sale (Intelligent Reading Machine and magnification system for people with low vision) this machine operated in linux computer, with third party software, but the main application to speak and joins between this softwares was made in Ruby.\n- Network infrastructure management and settings.\n- Management and adjustment of computer equipment infrastructure.\n- Creation of mobile applications in Xamarin.\n- Creating mobile applications in JS with React.\n- Technical profile of the ConVertic tender.\n- Platform download for the blind community in JavaServerFaces.\n- Design, creation and support of the database in PostgreSQL.",
              "highlighted": true,
              "weight": 0,
              "verifications": 0,
              "recommendations": 0,
              "media": [
                  {
                      "group": "f2da55b5-a634-4a61-96b8-ebacc369d181",
                      "mediaType": "link",
                      "description": "",
                      "mediaItems": [
                          {
                              "id": "wM7zzDNY",
                              "address": "https://www.convertic.gov.co/641/w3-channel.html"
                          }
                      ]
                  }
              ],
              "rank": 4
          },
          {
              "id": "kybq2RRj",
              "category": "jobs",
              "name": "Senior Developer",
              "organizations": [
                  {
                      "id": 447184,
                      "name": "Sunshine Bouquet Company",
                      "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1601937486/origin/bio/organizations/y2zsjtgfvxzgj5mlydzu.png"
                  }
              ],
              "responsibilities": [
                  "Senior developer focused on web applications, data APIs and database implementations"
              ],
              "fromMonth": "November",
              "fromYear": "2018",
              "remote": true,
              "additionalInfo": "- lifting of requirements and business modeling.\n- Creation of web applications in MVC5 (payroll and production, Employs documents).\n- Integration of biometric devices in web applications.\n- Creating stored procedures in SQL Server.\n- High level application support.\n- Application creation in Xamarin.\n- Creating and integrate REST-API",
              "highlighted": true,
              "weight": 0,
              "verifications": 0,
              "recommendations": 0,
              "media": [
                  {
                      "group": "b4313194-8363-4ad1-9593-5d9945e58415",
                      "mediaType": "media",
                      "description": "",
                      "mediaItems": [
                          {
                              "id": "9MEkknyl",
                              "address": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1602014214/origin/bio/experiences/696dbb17-33ad-47a9-a780-832e7a67ebf5_imeia0.png",
                              "metadata": "{\"width\":1356,\"height\":401,\"orientation\":-2,\"focalPointX\":0.5,\"focalPointY\":0.5}"
                          }
                      ]
                  }
              ],
              "rank": 5
          }
      ],
  })
  }
}
