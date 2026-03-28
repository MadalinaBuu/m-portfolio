import { Component } from '@angular/core';
import { DescriptionComponent } from "../description/description.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  imports: [DescriptionComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
