import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// link: https://johnpapa.net/angular-9-lazy-loading-components/
@Component({
    template: `<h1>Lazy Load</h1>
    <button (click)="getLazy1()">Load lazy 1</button>
    <button (click)="getLazy2()">Load lazy 2</button>
    `,
    styles: [`
             button {
               margin-right: 20px;
             }
             `]
})
export class LazyLoadComponent {

    constructor(
        private viewContainerRef: ViewContainerRef,
        private cfr: ComponentFactoryResolver
    ) { }

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
