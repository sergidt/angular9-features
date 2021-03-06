import { Component, Injector, Type } from '@angular/core';
import { FooDIComponent } from './foo-di.component';

@Component({
    selector: 'communication-DI',
    template: `
      <markdown [data]="markdown"></markdown>

      <button mat-raised-button (click)="loadFoo()">Load FooComponent</button>
      <div *ngIf="foo">
        <ng-template [ngComponentOutletInjector]="compInjector"
                     [ngComponentOutlet]="foo | async"></ng-template>
      </div>
    `,
    styles: [`
               :host {
                 margin-top: 30px;  
                 display: flex;
                 align-items: center;
               }

               markdown {
                width: 800px;
                 margin-right: 100px;
               }
               
               button {
                 margin-right: 20px;
                 margin-bottom: 50px;
               }
             `]
})
export class CommunicationDIComponent {
    constructor(private injector: Injector) {}
    foo: Promise<Type<FooDIComponent>>;

    compInjector: Injector;

    loadFoo() {
        if (!this.foo) {
            this.compInjector = Injector.create({
                providers: [{
                    provide: 'DATA',
                    useValue: { message: 'Voilà!!' }
                }],
                parent: this.injector
            });

            this.foo = import(`./foo-di.component`)
                .then(({ FooDIComponent }) => FooDIComponent);
        }
    }

    markdown = `
### This approach is suitable for cases that our component doesn’t expose events that we want to listen to

\`\`\`typescript
@Component({
    selector: 'communication-DI',
    template: \`
      <markdown [data]="markdown"></markdown>

      <button mat-raised-button (click)="loadFoo()">Load FooComponent</button>
      <div *ngIf="foo">
        <ng-template [ngComponentOutletInjector]="compInjector"
                     [ngComponentOutlet]="foo | async"></ng-template>
      </div>
    \`,
    styles: [\`
               :host {
                 margin-top: 50px;
               }

               button {
                 margin-right: 20px;
                 margin-bottom: 50px;
               }
             \`]
})
export class CommunicationDIComponent {
    constructor(private injector: Injector) {}
    foo: Promise<Type<FooDIComponent>>;

    compInjector: Injector;

    loadFoo() {
        if (!this.foo) {
            this.compInjector = Injector.create({
                providers: [{
                    provide: 'DATA',
                    useValue: { message: 'Voilà!!' }
                }],
                parent: this.injector
            });

            this.foo = import(\`./foo-di.component\`)
                .then(({ FooDIComponent }) => FooDIComponent);
        }
    }
}

// FooDIComponent

@Component({
  template: \`
   <h1>Foo DI works!</h1>
      <div>{{data.message}}</div>
  \`
})
export class FooDIComponent {
  constructor(@Inject('DATA') public data) {
  }
}

\`\`\`
`;
}
