import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.scss']
})
export class DeletePersonComponent implements OnInit {
  public delete: boolean = false;

  constructor(
    private afs: AngularFirestore,
    public deleteDialog: MatDialogRef<DeletePersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public personService: PersonService<Person>,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
  }

  onSubmitDelete(person: any): void {
    if (this.delete === true) {
      console.log(person)
      this.personService.deletePerson("PersonCollection", person.id).then(res => {
        alert("Person deleted succesfully!")
      }).catch(error => {
        alert("Person was not deleted due to an error!")
      }) 
    }
  }

}
