import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from 'src/app/shared/person.model';

@Injectable({
  providedIn: 'root'
})

export class PersonService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('title', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  /* get(collectionName: string, limit?: any, orderBy?: any, startAt?: any, parent?: string, parentPath = 'parentId', opStr = '==') {
    return this.afs.collection(collectionName,
      ref => {
        let query: CollectionReference | Query = ref;
        if (parent) {
          query = query.where(parentPath, opStr as any, parent);
        }
        if (limit) {
          query = query.limit(limit);
        }
        if (orderBy?.active && orderBy?.direction) {
          query = query.orderBy(orderBy.active, orderBy.direction);
        } else {
          query = query.orderBy('id');
        }
        if (startAt) {
          query = query.startAt(startAt[orderBy?.active ? orderBy.active : 'id']);
        }
        return query;
      }
    ).valueChanges();
  } */

  async createPerson(collectionName: string, person: T): Promise<T> {
    await this.afs.collection(collectionName).doc(person.id).set(person);
    return person;
  }

  weakAddPerson(collectionName: string, data: T) {
    return this.afs.collection(collectionName).add(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }

  getPersonById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  updatePerson(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }

  deletePerson(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
