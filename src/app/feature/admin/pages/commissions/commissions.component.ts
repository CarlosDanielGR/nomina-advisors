import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ManageCommissionComponent } from './components/manage-commission/manage-commission.component';
import { TARGETS, TYPE_CRUP } from 'src/app/shared/constant/comission.constant';

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
    if (type === 3) {
      return;
    }
    const modalRef = this.modalService.open(ManageCommissionComponent, {
      centered: true,
    });
    modalRef.componentInstance.isEdit = type === 1 ? true : false;
  }
}
