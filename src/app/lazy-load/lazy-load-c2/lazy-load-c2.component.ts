import { CommonModule } from '@angular/common';
import { Component, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
import { FooComponent } from './foo.component';

// link: https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a
@Component({
    template: `
      <markdown [data]="markdown"></markdown>

      <button mat-raised-button (click)="loadFoo()">Load FooComponent</button>
      <div *ngIf="foo">
        <ng-template [ngComponentOutlet]="foo | async"></ng-template>
      </div>
    `,
    styles: [`
               :host {
                 margin-top: 50px;
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


\`\`\`typescript
@Component({
    template: \`
      <button mat-raised-button (click)="loadFoo()">Load FooComponent</button>
      <div *ngIf="foo">
        <ng-template [ngComponentOutlet]="foo | async"></ng-template>
      </div>
})
    \`,
export class LazyLoadC2Component {

    foo: Promise<Type<FooComponent>>;

    loadFoo() {
        if (!this.foo) {
            this.foo = import(\`./foo.component\`)
                .then(({ FooComponent }) => FooComponent);
        }
    }
}

\`\`\`
`;
    foo: Promise<Type<FooComponent>>;

    loadFoo() {
        if (!this.foo) {
            this.foo = import(`./foo.component`)
                .then(({ FooComponent }) => FooComponent);
        }
    }
}

// MAGIC TIP!!
@NgModule({
    imports: [MatButtonModule,
              MarkdownModule, CommonModule],
    declarations: [LazyLoadC2Component]
})
class LazyLoadC2Module {
}
