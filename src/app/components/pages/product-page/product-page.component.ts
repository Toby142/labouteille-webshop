import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  parallaxOffset: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Adjust the parallax offset based on scroll position
    this.parallaxOffset = window.scrollY * 0.3; // Adjust the multiplier for desired effect
  }

  ngOnInit() {
    setTimeout(() => {
      window.scrollBy({ top: 350, behavior: 'smooth',  });
    }, 500); // Delay by 500 milliseconds (0.5 seconds)
  }

}
