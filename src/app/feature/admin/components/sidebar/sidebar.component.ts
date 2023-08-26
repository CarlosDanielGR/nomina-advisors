import { Component, OnInit } from '@angular/core';

import {
  NgSimpleSidebarService,
  SimpleSidebarConfiguration,
} from 'ng-simple-sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarItems = [
    {
      name: 'Perfil',
      icon: 'fa-solid fa-user',
      routerLink: ['/admin'],
      position: 'top',
    },
    {
      name: 'Comisiones',
      icon: 'fa-solid fa-chart-line',
      routerLink: ['commissions'],
      position: 'top',
    },
    {
      name: 'Ventas',
      icon: 'fa-solid fa-money-check-dollar',
      routerLink: ['sales'],
      position: 'top',
    },
    {
      name: 'Nomina',
      icon: 'fa-solid fa-hand-holding-dollar',
      routerLink: ['nomina'],
      position: 'top',
    },
  ];

  sidebarConfig: SimpleSidebarConfiguration = {
    openIcon: 'fa-solid fa-bars',
    closeIcon: 'fa-solid fa-xmark',
    colors: {
      darkMode: false,
      background: '#eee',
      font: '#000',
      darkModeBackground: '#333',
      darkModeFont: '#fff',
    },
    closeAfterClick: false,
    mobile: false,
    position: 'sticky',
  };

  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {
    this.ngSimpleSidebarService.addItems(this.sidebarItems);
    this.ngSimpleSidebarService.configure(this.sidebarConfig);
    this.ngSimpleSidebarService.open();
  }

  ngOnInit(): void {}
}
