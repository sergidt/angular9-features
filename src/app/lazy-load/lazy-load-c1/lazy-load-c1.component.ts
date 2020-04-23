import { Component, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownModule } from 'ngx-markdown';
// link: https://johnpapa.net/angular-9-lazy-loading-components/
@Component({
    template: `
    <markdown [data]="markdown"></markdown>
    
    <button mat-raised-button (click)="getLazy1()">Load lazy 1</button>
    <button mat-raised-button (click)="getLazy2()">Load lazy 2</button>
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
export class LazyLoadC1Component {

    markdown = `# Lazy loading components: ViewContainerRef + ComponentFactoryResolver
\`\`\`typescript
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
    declarations: [LazyLoadC1Component]
})
class LazyLoadC1Module {
}
