import { Component, Inject } from '@angular/core';

@Component({
  template: `
   <h1>Foo DI works!</h1>
      <div>{{data.message}}</div>
  `
})
export class FooDIComponent {
  constructor(@Inject('DATA') public data) {
  }
}
