import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss']
})
export class Lazy2Component implements OnInit {
  constructor(
      private viewContainerRef: ViewContainerRef,
      private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactoryA = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryB = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.viewContainerRef.createComponent(componentFactoryA);
    this.viewContainerRef.createComponent(componentFactoryB);
  }

}
