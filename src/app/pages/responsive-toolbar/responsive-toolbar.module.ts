import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveToolbarComponent } from './responsive-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ResponsiveToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [ResponsiveToolbarComponent]
})
export class ResponsiveToolbarModule { }
