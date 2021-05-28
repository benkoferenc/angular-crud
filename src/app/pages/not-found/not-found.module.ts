import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
