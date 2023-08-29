import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ManageCommissionComponent } from './components/manage-commission/manage-commission.component';
import {
  TARGETS,
  TYPE_ADVISER,
  TYPE_CRUP,
} from 'src/app/shared/constant/comission.constant';
import { AdminService } from '../../services/admin.service';
import { Commission } from '../../interfaces/commission.interface';
import { Target } from 'src/app/shared/interfaces/nomina.interface';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
})
export class CommissionsComponent implements OnInit {
  targets: (Target & { commissions?: number[] })[] = [...TARGETS];

  typeAdviser = TYPE_ADVISER;

  typeCrup = TYPE_CRUP;

  targetNum: number = 0;

  constructor(
    private readonly modalService: NgbModal,
    private readonly adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getAllCommissions();
  }

  private getAllCommissions(): void {
    this.adminService.getAllCommissions().subscribe({
      next: (res) => {
        this.targetNum = res.length + 1;
        // this.targets.forEach((target) => {
        //   const experience = res.filter(
        //     (commission) =>
        //       this.typeAdviser[target.type] === commission.experience
        //   );
        //   target.commissions = experience.map(
        //     (commission) => commission.profit
        //   );
        // });
      },
    });
  }

  openManageComission(type: TYPE_CRUP): void {
    if (type === 3) {
      return;
    }
    const modalRef = this.modalService.open(ManageCommissionComponent, {
      centered: true,
    });
    modalRef.componentInstance.isEdit = type === 1 ? true : false;
    modalRef.componentInstance.targetNum = this.targetNum;
  }
}
