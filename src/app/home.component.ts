import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
      <div class="home-title">New Features in Angular 9</div>
        <img src="assets/home.jpg">
    `,
    styles: [`
               .home-title {
                 margin-top: 100px;
                 margin-bottom: 100px;
                 font-size: 80px;
                 font-family: fantasy;
               }
             `]
})
export class HomeComponent {
}
