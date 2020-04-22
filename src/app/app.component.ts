import { Component } from '@angular/core';
import { APP_ROUTES } from './app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Routes = APP_ROUTES;
}
