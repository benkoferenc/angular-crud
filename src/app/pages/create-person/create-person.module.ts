import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePersonComponent } from './create-person.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [CreatePersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  exports: [
    [CreatePersonComponent]
  ]
})
export class CreatePersonModule { }
