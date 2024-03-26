import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  parallaxOffset: number = 0;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Adjust the parallax offset based on scroll position
    this.parallaxOffset = window.scrollY * 0.3; // Adjust the multiplier for desired effect
  }


  ngOnInit() {
    setTimeout(() => {
      window.scrollTo({ top: 350, behavior: 'smooth',  });
    }, 500); // Delay by 500 milliseconds (0.5 seconds)
  }
  
  





}
