import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
  { path: '', component: DescriptionComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'work', component: MyWorkComponent },
  { path: 'contact', component: ContactComponent },
];
