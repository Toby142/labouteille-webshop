import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'labouteille-webshop';

    constructor(private router: Router) { 
        this.router.events.subscribe((val) => {
            if(val instanceof NavigationStart) {
                window.scrollTo(0, 0);
            }
        });
    }


}
