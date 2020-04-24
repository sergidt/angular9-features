import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';
import { APP_ROUTES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes: Routes = APP_ROUTES.filter(_ => !!_.data.label);
  currentRouteData: Data = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.router.navigateByUrl('/');

    this.router.events
        .pipe(filter(_ => _ instanceof ActivationEnd))
        .subscribe((_: ActivationEnd) => {
          this.currentRouteData = _?.snapshot?.data;
        });
  }
}
