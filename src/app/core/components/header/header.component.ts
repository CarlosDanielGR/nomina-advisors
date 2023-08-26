import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly ASSETS_LOGO = environment.ASSETS_LOGO;

  showRoute: boolean = false;

  currentRoute: string = '';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.handleRoute();
  }

  private handleRoute(): void {
    this.router.events.subscribe({
      next: (route) => {
        if (route instanceof NavigationEnd) {
          const url = route.url;
          this.showRoute = url.includes('admin');
          this.currentRoute = url.split('/').at(-1) ?? '';
        }
      },
    });
  }
}
