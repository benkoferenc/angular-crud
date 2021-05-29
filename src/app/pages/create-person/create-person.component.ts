import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { HumanName, Person } from 'src/app/shared/person.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {
  public personForm: FormGroup;
  youngPeople: any[] = [];
  unknownGenderPeople: any[] = [];

  constructor(
    private afs: AngularFirestore,
    public personService: PersonService<Person>,
    public formBuilder: FormBuilder,
    public router: Router) {
      this.personForm = this.formBuilder.group({
        family: new FormControl('', Validators.required),
        given: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        birthDate: new FormControl('', Validators.required)
      })
     }


  ngOnInit(): void {
    this.queryYoung();
    this.queryUnknown();
  }

  onSubmit() {
      if(this.personForm.valid){
        var humanName: HumanName[] = [
          {
          'given': this.personForm.value.given,
          'family': this.personForm.value.family
        }
      ]
        var person: Person = {
          'id': this.afs.createId(),
          'name': humanName,
          'gender': this.personForm.value.gender,
          'birthDate': this.personForm.value.birthDate
        }
      this.personService.createPerson("PersonCollection", person).then(res => {
        this.router.navigateByUrl("/list")
        alert("Person added succesfully!")
      }).catch(error => {
        alert("Person was not added due to an error!")
        this.router.navigateByUrl("/list")
      }) 
    }
  }

  queryYoung() {
    this.youngPeople = [];
    this.afs.collection('PersonCollection', ref => ref.where('birthDate', '>', '1980').orderBy('birthDate', 'asc').orderBy('id', 'desc'))
    .get().subscribe(res => {
      res.docs.forEach(e1 => {
        this.youngPeople.push(e1.data());
      })
    }, error => {
      console.log('kiolvasási hiba', error);
    })
  }

  queryUnknown() {
    this.unknownGenderPeople = [];
    this.afs.collection('PersonCollection', ref => ref.where('gender', '==', 'unknown').orderBy('id', 'desc'))
    .get().subscribe(res => {
      res.docs.forEach(e1 => {
        console.log(e1.data)
        this.unknownGenderPeople.push(e1.data());
      })
    }, error => {
      console.log('kiolvasási hiba', error);
    })
  }
}
