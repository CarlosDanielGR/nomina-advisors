import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TARGETS, TYPE_CRUP } from './constant/comission.constant';
import { ManageCommissionComponent } from './components/manage-commission/manage-commission.component';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
})
export class CommissionsComponent implements OnInit {
  targets = TARGETS;

  typeCrup = TYPE_CRUP;

  constructor(private readonly modalService: NgbModal) {}

  ngOnInit(): void {}

  openManageComission(type: TYPE_CRUP): void {
    this.modalService.open(ManageCommissionComponent, { centered: true });
  }
}
