import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminService } from 'src/app/feature/admin/services/admin.service';

@Component({
  selector: 'app-sale-simulator',
  templateUrl: './sale-simulator.component.html',
  styleUrls: ['./sale-simulator.component.scss'],
})
export class SaleSimulatorComponent implements OnInit {
  @Input() users: Record<string, string>[] = [];

  formSale!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly activeModal: NgbActiveModal,
    private readonly adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.initFormSale();
  }

  private initFormSale(): void {
    this.formSale = this.formBuilder.group({
      price: ['', [Validators.required]],
      userId: ['', [Validators.required]],
    });
  }

  sendData(): void {
    const body = this.formSale.value;
    this.adminService.createSale(body).subscribe({
      next: () => {
        this.activeModal.close();
      },
    });
  }
}
