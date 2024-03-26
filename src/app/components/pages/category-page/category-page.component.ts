import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  category: string | undefined;
  parallaxOffset: number = 0;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      window.scrollTo({ top: 350, behavior: 'smooth',  });
    }, 500); // Delay by 500 milliseconds (0.5 seconds)

    if (window.location.pathname.split('/').length < 3) {
      window.location.href = '/home';
    } else {
      let route = window.location.pathname.split('/').pop();
      console.log(route);
      this.category = route;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Adjust the parallax offset based on scroll position
    this.parallaxOffset = window.scrollY * 0.3; // Adjust the multiplier for desired effect
  }
}
