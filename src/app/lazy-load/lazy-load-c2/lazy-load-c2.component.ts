import { CommonModule } from '@angular/common';
import { Component, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { CommunicationDIComponent } from './communication-di.component';
import { CreatingComponentComponent } from './creating-component.component';
import { FooComponent } from './foo.component';

// link: https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a
@Component({
    template: `
      <markdown [data]="markdown"></markdown>

      <mat-tab-group>
        <mat-tab label="Loading component">
          <creating-component></creating-component>
        </mat-tab>

        <mat-tab label="Communication: DI">
          <communication-DI></communication-DI>
        </mat-tab>
      </mat-tab-group>
    `,
    styles: [`
               :host {
                 margin-top: 50px;
                 position: relative;
               }

               button {
                 margin-right: 20px;
                 margin-bottom: 50px;
               }
             `]
})
export class LazyLoadC2Component {

    markdown = `# Lazy loading components: ng-template + ngComponentOutlet
    
Using Webpack import function automatically it starts code-splitting your application:
* A new chunk is created for the any loaded file, and is not include it in the main bundle. 
* Everything is already configured for you, and you can start using it immediately.
* Note that there is no need anymore to add the component to the module’s entryComponents array. Angular finds the component on its own.

`;
}

// MAGIC TIP!!
@NgModule({
    imports: [MatButtonModule,
              MarkdownModule, CommonModule, MatTabsModule],
    declarations: [LazyLoadC2Component, CreatingComponentComponent, CommunicationDIComponent]
})
class LazyLoadC2Module {
}
