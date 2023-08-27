import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ROUTES_ADMIN } from 'src/app/shared/constant/route.constant';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly ASSETS_LOGO = environment.ASSETS_LOGO;

  routeNames: Record<string, string> = {
    admin: 'Perfil',
    [ROUTES_ADMIN.COMMISSIONS]: 'Comisiones',
    [ROUTES_ADMIN.SALES]: 'Ventas',
    [ROUTES_ADMIN.NOMINA]: 'Nomina',
  };

  isAdmin: boolean = false;

  isAuth: boolean = false;

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
          this.isAdmin = url.includes('admin');
          this.isAuth = url === '/' || url === '/register';
          this.currentRoute = url.split('/').at(-1) ?? '';
        }
      },
    });
  }
}
