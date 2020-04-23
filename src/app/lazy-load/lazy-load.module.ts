import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { LazyLoadC1Component } from './lazy-load-c1/lazy-load-c1.component';
import { LazyLoadC2Component } from './lazy-load-c2/lazy-load-c2.component';
import { LazyLoadComponent } from './lazy-load.component';
import { RouterModule, Routes } from '@angular/router';

const LAZY_LOADING_ROUTES: Routes = [
  {
    path: '',
    component: LazyLoadComponent,
    children: [
      { path: 'components-1', component: LazyLoadC1Component },
      { path: 'components-2', component: LazyLoadC2Component },
      { path: '', redirectTo: 'components-1' }
    ]
  }
];

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule.forChild(LAZY_LOADING_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class LazyLoadModule { }
