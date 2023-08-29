import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ManageCommissionComponent } from './components/manage-commission/manage-commission.component';
import {
  TARGETS,
  TYPE_ADVISER,
  TYPE_CRUP,
} from 'src/app/shared/constant/comission.constant';
import { AdminService } from '../../services/admin.service';
import { Target } from 'src/app/shared/interfaces/nomina.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
})
export class CommissionsComponent implements OnInit {
  targets: (Target & { commissions?: number[] })[] = [...TARGETS];

  typeAdviser = TYPE_ADVISER;

  typeCrup = TYPE_CRUP;

  formRemove!: FormGroup;

  isRemove: boolean = false;

  targetNum: number = 0;

  constructor(
    private readonly modalService: NgbModal,
    private readonly adminService: AdminService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllCommissions();
    this.initFormRemove();
  }

  private initFormRemove(): void {
    this.formRemove = this.formBuilder.group({
      1: [''],
      2: [''],
      3: [''],
    });
  }

  private getAllCommissions(): void {
    this.adminService.getAllCommissions().subscribe({
      next: (res) => {
        this.targets.forEach((target) => {
          const experience = res.filter(
            (commission) =>
              this.typeAdviser[target.type] === +commission.experience
          );
          target.commissions = experience.map(
            (commission) => commission.profit
          );
        });
        const { commissions } = this.targets[0];
        this.targetNum = (commissions?.length ?? 0) + 1;
      },
    });
  }

  toggleRemove(): void {
    this.isRemove = !this.isRemove;
  }

  removeCommissions(): void {
    console.log(this.formRemove.value);
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
    modalRef.closed.subscribe({
      next: () => {
        this.getAllCommissions();
      },
    });
  }
}
