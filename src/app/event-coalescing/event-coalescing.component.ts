import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <div (click)="parent()">
      <button (click)="child()">Submit</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCoalescingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
