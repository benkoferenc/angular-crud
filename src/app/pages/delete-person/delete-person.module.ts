import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePersonComponent } from './delete-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DeletePersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [DeletePersonComponent]
})
export class DeletePersonModule { }
