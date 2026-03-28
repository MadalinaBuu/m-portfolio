import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }
];

