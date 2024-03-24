import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled: boolean = false;
  isAtTop: boolean = true;
  prevScrollPos = window.scrollY;
  visible = true;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.scrollY;
    this.isScrolled = currentScrollPos > 0;
    this.isAtTop = currentScrollPos === 0;
    
    if (this.isAtTop && this.isMenuOpen) {
      // If the menu is open and at the top, close it
      this.isMenuOpen = false;
    }
    
    if (!this.isMenuOpen) {
      // If the menu is closed, handle navbar visibility on scroll
      this.visible = this.prevScrollPos > currentScrollPos;
    }
    
    this.prevScrollPos = currentScrollPos;
  }

  toggleMenu() {
    // if it is at the top make it scroll down a little to open because at top cant be opened
    if (this.isAtTop) {
      window.scrollTo(0, 1);
    }
    this.isMenuOpen = !this.isMenuOpen;
  }
}
