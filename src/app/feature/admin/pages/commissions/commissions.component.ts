import { Component, OnInit } from '@angular/core';

import { Target } from '../../interfaces/commission.interface';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
})
export class CommissionsComponent implements OnInit {
  targets: Target[] = [
    {
      type: 'Junior',
      price: 5000000,
    },
    {
      type: 'Senior',
      price: 10000000,
    },
    {
      type: 'Master',
      price: 15000000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
