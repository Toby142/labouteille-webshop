import { Component, Host, HostListener, Input } from '@angular/core';

@Component({
	selector: 'app-big-category-section',
	templateUrl: './big-category-section.component.html',
	styleUrls: ['./big-category-section.component.css']
})
export class BigCategorySectionComponent {
	parallaxOffset: number = 0;
	parallaxDiv: HTMLElement | null = null;
	viewportHeight: number = 0;

	ngAfterViewInit() {
		// Get a reference to the .parallax div
		this.parallaxDiv = document.querySelector('.parallax');
		// Calculate viewport height
		this.viewportHeight = window.innerHeight;
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event: Event) {
		// Check if parallaxDiv is initialized
		if (this.parallaxDiv) {
			// Calculate the distance of the .parallax div from the center of the viewport
			const parallaxOffsetFromCenter = this.parallaxDiv.getBoundingClientRect().top + this.parallaxDiv.clientHeight / 2 - this.viewportHeight / 2;

			// Calculate the parallax effect
			this.parallaxOffset = (parallaxOffsetFromCenter - window.scrollY) * 0.1; // Negate the offset
		}
	}
	
}
