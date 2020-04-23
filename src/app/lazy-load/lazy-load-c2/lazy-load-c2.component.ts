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
\`\`\`typescript


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
