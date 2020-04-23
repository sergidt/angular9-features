import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
      <h1>Lazy loading with Ivy</h1>
      <div class="toggle-buttons-centered">
      <mat-button-toggle-group value="components-1" (change)="navigateTo($event.value)">
        <mat-button-toggle value="components-1">Components 1</mat-button-toggle>
        <mat-button-toggle value="components-2">Components 2</mat-button-toggle>
        <mat-button-toggle value="modules">Modules</mat-button-toggle>
      </mat-button-toggle-group>
      </div>
      
      <router-outlet></router-outlet>`,
    styles: [`
               h1 {
                 width: 100%;
                 text-align: center;
                 margin-bottom: 30px;
               }
             `]
})
export class LazyLoadComponent {
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    navigateTo(subPath: string) {
        this.router.navigate([subPath], { relativeTo: this.route });
    }
}
