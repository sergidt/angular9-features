import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: 'lazy-load',
    data: {
      label: 'Lazy load'
    },
    loadChildren: () => import('src/app/lazy-load/lazy-load.module').then(m => m.LazyLoadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
