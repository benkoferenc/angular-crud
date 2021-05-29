import { Component, OnInit, Inject, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { HumanName, Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})

export class UpdatePersonComponent implements OnInit {
  public personForm: FormGroup;
  public update: boolean = false;

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<UpdatePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    this.personForm.setValue({
      given: this.data.name[0].given,
      family: this.data.name[0].family,
      gender: this.data.gender,
      birthDate: this.data.birthDate
    });
    
  }

  onSubmit() {
    if(this.personForm.valid && this.update){
      var humanName: HumanName[] = [
        {
        'given': this.personForm.value.given,
        'family': this.personForm.value.family
      }
    ]
      var person: Person = {
        'id': this.data.id,
        'name': humanName,
        'gender': this.personForm.value.gender,
        'birthDate': this.personForm.value.birthDate
      }
    this.personService.updatePerson("PersonCollection", this.data.id, person).then(res => {
      console.log(this.data.id)
      console.log(person)
      alert("Person modified succesfully!")
    }).catch(error => {
      alert("Person was not modified due to an error!")
    }) 
  }
}

}
