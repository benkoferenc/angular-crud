import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Person } from 'src/shared/person.model';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private angularFirestore: AngularFirestore) { }

  getPersonDoc(identifier : number[]) {
    return this.angularFirestore
    .collection('person-collection')
    .doc(identifier)
    .valueChanges()
  }

  getpersonList() { 
    return this.angularFirestore
    .collection("person-collection")
    .snapshotChanges();
  }

  createPerson(person: Person) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("person-collection")
        .add(person)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deletePerson(person: Person) {
    return this.angularFirestore
      .collection("person-collection")
      .doc(person.identifier)
      .delete();
  }
  
  updatePerson(person: Person, identifier) {
    return this.angularFirestore
      .collection("person-collection")
      .doc(identifier)
      .update({
        name: person.name,
        email: person.email,
        contact: person.contact
      });
  }
}
