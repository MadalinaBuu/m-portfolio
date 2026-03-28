import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  isDark = false;

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme');
  }

  goTo(fragment: string) {
    this.closeMenu();

    this.router.navigate(['/'], { fragment }).then(() => {
      setTimeout(() => {
        this.scroller.scrollToAnchor(fragment);
      }, 50);
    });
  }
}
