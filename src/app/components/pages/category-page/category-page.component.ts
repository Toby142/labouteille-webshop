import { Component } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {

  constructor() { }

  category: string | undefined;

  ngOnInit() {
    if (window.location.pathname.split('/').length < 3) {
      window.location.href = '/home';
    } else {
      let route = window.location.pathname.split('/').pop();
      console.log(route);
      this.category = route;
    }
  }
}
