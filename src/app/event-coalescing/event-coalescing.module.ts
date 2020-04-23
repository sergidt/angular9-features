import { NgModule } from '@angular/core';
import { LazyLoadComponent } from './lazy-load.component';
import { RouterModule, Routes } from '@angular/router';
import { EventCoalescingComponent } from './event-coalescing.component';

const EVENT_COALESCING_ROUTES: Routes = [
  {
    path: '',
    component: EventCoalescingComponent
  }
];

@NgModule({
  declarations: [
    EventCoalescingComponent
  ],
  imports: [
  RouterModule.forChild(EVENT_COALESCING_ROUTES)
],
exports: [
  RouterModule
  ],
})
export class EventCoalescingModule { }
