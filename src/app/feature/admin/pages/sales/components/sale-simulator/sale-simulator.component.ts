import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/feature/admin/interfaces/profile.interface';
import { AdminService } from 'src/app/feature/admin/services/admin.service';

@Component({
  selector: 'app-sale-simulator',
  templateUrl: './sale-simulator.component.html',
  styleUrls: ['./sale-simulator.component.scss'],
})
export class SaleSimulatorComponent implements OnInit {
  users$: Observable<User[]> = new Observable();

  formSale!: FormGroup;

  constructor(
    private readonly adminService: AdminService,
    private readonly formBuilder: FormBuilder,
    private readonly activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.users$ = this.adminService.getAllUsers();
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
