import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  goTo(fragment: string) {
    this.router.navigate(['/'], { fragment }).then(() => {
      setTimeout(() => {
        this.scroller.scrollToAnchor(fragment);
      }, 50);
    });
  }
}
