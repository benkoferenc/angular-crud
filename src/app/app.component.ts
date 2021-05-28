import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Person } from 'src/app/shared/person.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'person-firebase-crud';
  person: Person;

  saveData() {
    this.afs.collection('PersonCollection').add(this.person).then(res => {
      console.log('mentes sikeres', res);
    }).catch(error => {
      console.log('error', error);
    })
  }

  readData() {
    this.afs.collection('PersonCollection', ref => ref.where('birthDate', '<', '1980').orderBy('birthDate', 'asc').orderBy('id', 'desc'))
    .get().subscribe(res => {
      res.docs.forEach(e1 => {
        console.log(e1.data());
      })
    }, error => {
      console.log('kiolvasási hiba', error);
    })
  }

  constructor(private afs: AngularFirestore) {
    this.person = {
      "resourceType": "Person",
      "id": "example",
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;)</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Home: unknown. Work: (03) 5555 6473</td>\n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 12345 (Acme Healthcare)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
      },
      "identifier": [
        {
          "use": "usual",
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "MR"
              }
            ]
          },
          "system": "urn:oid:1.2.36.146.595.217.0.1",
          "value": "12345",
          "period": {
            "start": "2001-05-06"
          },
          "assigner": {
            "display": "Acme Healthcare"
          }
        }
      ],
      "name": [
        {
          "use": "official",
          "family": "Chalmers",
          "given": [
            "Peter",
            "James"
          ]
        },
        {
          "use": "usual",
          "given": [
            "Jim"
          ]
        }
      ],
      "telecom": [
        {
          "use": "home"
        },
        {
          "system": "phone",
          "value": "(03) 5555 6473",
          "use": "work"
        },
        {
          "system": "email",
          "value": "Jim@example.org",
          "use": "home"
        }
      ],
      "gender": "male",
      "birthDate": "1974-12-25",
      "address": [
        {
          "use": "home",
          "line": [
            "534 Erewhon St"
          ],
          "city": "PleasantVille",
          "state": "Vic",
          "postalCode": "3999"
        }
      ],
      "active": true,
      "link": [
        {
          "target": {
            "reference": "RelatedPerson/peter",
            "display": "Peter Chalmers"
          }
        },
        {
          "target": {
            "reference": "Patient/example",
            "display": "Peter Chalmers"
          }
        }
      ]
    }
  }
}
