import { Component } from '@angular/core';
import { DescriptionComponent } from "../description/description.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ContactComponent } from "../contact/contact.component";
import { MyWorkComponent } from "../my-work/my-work.component";

@Component({
  selector: 'app-home',
  imports: [DescriptionComponent, AboutMeComponent, ContactComponent, MyWorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
