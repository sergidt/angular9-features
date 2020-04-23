import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
// link: https://netbasal.com/reduce-change-detection-cycles-with-event-coalescing-in-angular-c4037199859f
@Component({
  template: `
    <div (click)="parent()" class="parent">
      <button (click)="child()">Child</button>
    </div>
      
      
      <img src="assets/event-propagation.png" [style.opacity]="opacity">
  `,
  styles: [`
           .parent {
             width: 200px;
             height: 100px;
             display: flex;
             align-items: center;
             justify-content: center;
             border: solid 1px;
           }
           
           img {
             width: 80%;
           }
           `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCoalescingComponent {
  opacity = 0;

  constructor(private cd: ChangeDetectorRef) {
  }

  child() {
    console.log('Child button was clicked!');
    setTimeout(this.showImage.bind(this), 8000);
  }

  parent() {
    console.log('Parent div was clicked!');
  }

  showImage() {
    this.opacity = 1;
    this.cd.markForCheck();
  }
}
