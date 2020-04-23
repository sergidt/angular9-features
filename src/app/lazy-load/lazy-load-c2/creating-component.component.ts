import { CommonModule } from '@angular/common';
import { Component, NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MarkdownModule } from 'ngx-markdown';
import { FooComponent } from './foo.component';

@Component({
    selector: 'creating-component',
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
export class CreatingComponentComponent {
    foo: Promise<Type<FooComponent>>;

    loadFoo() {
        if (!this.foo) {
            this.foo = import(`./foo.component`)
                .then(({ FooComponent }) => FooComponent);
        }
    }

    markdown = `
\`\`\`typescript
@Component({
    template: \`
      <button mat-raised-button (click)="loadFoo()">Load FooComponent</button>
      <div *ngIf="foo">
        <ng-template [ngComponentOutlet]="foo | async"></ng-template>
      </div>
})
    \`,
export class Component {

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
}
