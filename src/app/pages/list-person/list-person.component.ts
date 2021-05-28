import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})

export class ListPersonComponent implements OnInit {
  Persons: Person[] | undefined;

  constructor() { }
  ngOnInit(): void {
  }

  /*ngOnInit() {
    this.personService.getPersonList().subscribe(res => {
      this.Persons = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Person
        } as Person;
      })
    });    
  }*/

  //removeperson = (person: any) => this.personService.deletePerson(person);
}