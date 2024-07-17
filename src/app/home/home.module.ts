import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    NgIconComponent
  ],
  exports: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
