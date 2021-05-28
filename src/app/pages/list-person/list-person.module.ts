import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPersonComponent } from './list-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [ListPersonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  exports: [ListPersonComponent]
})
export class ListPersonModule { }
