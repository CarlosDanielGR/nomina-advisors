import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminService } from 'src/app/feature/admin/services/admin.service';
import {
  TARGETS,
  TYPE_ADVISER,
} from 'src/app/shared/constant/comission.constant';

@Component({
  selector: 'app-manage-commission',
  templateUrl: './manage-commission.component.html',
  styleUrls: ['./manage-commission.component.scss'],
})
export class ManageCommissionComponent implements OnInit {
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
      condition: [''],
      profit: [''],
      experience: [''],
    });
  }

  sendCommission(): void {
    if (this.isEdit) {
      return;
    }
    this.createCommission();
  }

  private createCommission(): void {
    const body = this.formCommission.value;
    this.adminService.createComission(body).subscribe({
      next: () => {
        this.activeModal.close();
      },
    });
  }
}
