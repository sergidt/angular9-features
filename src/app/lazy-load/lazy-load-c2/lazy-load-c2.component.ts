import { Component, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
// link: https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a
@Component({
    template: `
    <markdown [data]="markdown"></markdown>
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

    constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

    async getLazy1() {
        this.viewContainerRef.clear();
        const { Lazy1Component } = await import('./lazy1/lazy1.component');
        this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(Lazy1Component));
    }

    async getLazy2() {
        this.viewContainerRef.clear();
        const { Lazy2Component } = await import('./lazy2/lazy2.component');
        this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(Lazy2Component));
    }

}

// MAGIC TIP!!
@NgModule({
    imports: [MatButtonModule,
    MarkdownModule],
    declarations: [LazyLoadC2Component]
})
class LazyLoadC2Module {
}
