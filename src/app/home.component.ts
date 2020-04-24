import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
      <div class="home-title">New Features in Angular 9</div>
      <img src="assets/home.jpg">
    `,
    styles: [`
               :host {
                 flex: 1;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
               }

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
