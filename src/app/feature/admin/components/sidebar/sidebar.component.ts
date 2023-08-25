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
      routerLink: ['profile'],
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
    closeAfterClick: true,
    mobile: false,
    position: 'sticky',
  };

  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {
    this.ngSimpleSidebarService.addItems(this.sidebarItems);
    this.ngSimpleSidebarService.configure(this.sidebarConfig);
  }

  ngOnInit(): void {}
}