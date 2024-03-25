import { Component, Host, HostListener, Input } from '@angular/core';

@Component({
	selector: 'app-big-category-section',
	templateUrl: './big-category-section.component.html',
	styleUrls: ['./big-category-section.component.css']
})
export class BigCategorySectionComponent {
	parallaxOffset: number = 0;
	
	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event: Event) {
		this.parallaxOffset = window.scrollY * 0.3;
	}
}
