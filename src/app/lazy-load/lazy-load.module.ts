import { NgModule } from '@angular/core';
import { LazyLoadComponent } from './lazy-load.component';
import { RouterModule, Routes } from '@angular/router';

const LAZY_LOADING_ROUTES: Routes = [
  {
    path: '',
    component: LazyLoadComponent,
    /*children: [
      {
        path: '',
        children: [
          { path: 'components', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]*/
  }
];

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
  RouterModule.forChild(LAZY_LOADING_ROUTES)
],
exports: [
  RouterModule
  ],
})
export class LazyLoadModule { }
