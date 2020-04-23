import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


export const APP_ROUTES: Routes = [
  {
    path: 'lazy-load',
    data: {
      path: 'lazy-load',
      label: 'Lazy load'
    },
    loadChildren: () => import('src/app/lazy-load/lazy-load.module').then(m => m.LazyLoadModule)
  },
  {
    path: 'event-coalescing',
    data: {
      path: 'event-coalescing',
      label: 'Event Coalescing'
    },
    loadChildren: () => import('src/app/event-coalescing/event-coalescing.module').then(m => m.EventCoalescingModule)
  },
  {
    path: '',
    data: {
      path: 'home',
      label: 'Home'
    },
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
