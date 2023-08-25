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
      name: 'Welcome',
      icon: 'las la-home',
      routerLink: ['/welcome'],
      position: 'top',
    },
    {
      name: 'About',
      icon: 'las la-address-book',
      routerLink: ['/about'],
      position: 'top',
    },
    {
      name: 'secanis.ch',
      icon: 'las la-external-link-alt',
      url: 'https://secanis.ch',
      target: '_blank',
      position: 'bottom',
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
    mobileTitle: 'I am a mobile title',
  };

  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {
    this.ngSimpleSidebarService.addItems(this.sidebarItems);
    this.ngSimpleSidebarService.configure(this.sidebarConfig);
  }

  ngOnInit(): void {}
}
