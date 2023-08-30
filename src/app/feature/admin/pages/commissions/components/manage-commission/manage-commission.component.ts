import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Commission } from 'src/app/feature/admin/interfaces/commission.interface';

import { AdminService } from 'src/app/feature/admin/services/admin.service';
import {
  TARGETS,
  TYPE_ADVISER,
} from 'src/app/shared/constant/comission.constant';
import { Target } from 'src/app/shared/interfaces/nomina.interface';

@Component({
  selector: 'app-manage-commission',
  templateUrl: './manage-commission.component.html',
  styleUrls: ['./manage-commission.component.scss'],
})
export class ManageCommissionComponent implements OnInit {
  @Input() targetNum: number = 0;

  @Input() commissionData: (Target & { commissions?: number[] })[] = [];

  @Input() isEdit: boolean = false;

  targets = TARGETS;

  typeAdviser = TYPE_ADVISER;

  formCommission!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly adminService: AdminService,
    private readonly activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.initFormCommission();
  }

  private initFormCommission(): void {
    this.formCommission = this.formBuilder.group({
      junior: ['', [Validators.required]],
      senior: ['', [Validators.required]],
      master: ['', [Validators.required]],
      target: [''],
    });
    if (this.isEdit)
      Object.keys(this.formCommission.value).forEach((key) => {
        if (key !== 'target') this.formCommission.get(key)?.disable();
      });
  }

  sendCommission(): void {
    if (this.isEdit) {
      this.updateCommission();
      return;
    }
    this.createCommission();
  }

  setFormCommission(targetNum: number): void {
    const indexTarget = targetNum - 1;

    Object.keys(this.formCommission.getRawValue()).forEach((key) => {
      console.log('test');

      this.formCommission.get(key)?.enable();
    });

    const getCommission = (index: number) => {
      return this.commissionData[index].commissions as Number[];
    };

    this.formCommission.patchValue({
      junior: getCommission(0)[indexTarget],
      senior: getCommission(1)[indexTarget],
      master: getCommission(2)[indexTarget],
    });
  }

  private createCommission(): void {
    this.adminService.createComission(this.setBody()).subscribe({
      next: () => {
        this.activeModal.close();
      },
    });
  }

  private updateCommission(): void {
    this.adminService.updateCommission(this.setBody()).subscribe({
      next: () => {
        this.activeModal.close();
      },
    });
  }

  private setBody(): Commission[] {
    const body: Commission[] = [];
    Object.keys(this.formCommission.value).forEach((key) => {
      if (key !== 'target')
        body.push({
          profit: this.formCommission.value[key],
          experience: this.typeAdviser[key as keyof typeof TYPE_ADVISER],
          target: this.isEdit
            ? this.formCommission.value['target']
            : this.targetNum,
        });
    });
    return body;
  }
}
