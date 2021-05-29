import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { CommonModule } from  '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CreatePersonModule } from './pages/create-person/create-person.module';
import { ListPersonModule } from './pages/list-person/list-person.module';
import { HomeModule } from './pages/home/home.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { ResponsiveToolbarModule } from './pages/responsive-toolbar/responsive-toolbar.module';
import { UpdatePersonModule } from './pages/update-person/update-person.module';
import { DeletePersonModule } from './pages/delete-person/delete-person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    CreatePersonModule,
    ListPersonModule,
    HomeModule,
    NotFoundModule,
    ResponsiveToolbarModule,
    AppRoutingModule,
    UpdatePersonModule,
    DeletePersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
