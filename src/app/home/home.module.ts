import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainComponent,
    NavbarComponent,
    HomeComponent,
  ],
  exports: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
