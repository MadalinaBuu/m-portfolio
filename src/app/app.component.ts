import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DescriptionComponent } from "./description/description.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'm-portfolio';
}
