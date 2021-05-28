import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreatePersonComponent } from './pages/create-person/create-person.component';
import { ListPersonComponent } from './pages/list-person/list-person.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreatePersonComponent },
  { path: 'list', component: ListPersonComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
  { path: 'notFound', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }