import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AdminService } from '../../services/admin.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  formProfile!: UntypedFormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modalService: NgbModal,
    private readonly adminService: AdminService,
    private readonly tokenService: TokenService,
    private readonly alerService: AlertService
  ) {}

  ngOnInit(): void {
    this.initFormProfile();
    this.setFormProfile();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initFormProfile(): void {
    this.formProfile = this.formBuilder.group({
      name: [''],
      email: [{ value: '', disabled: true }],
      phone: [''],
    });
  }

  private setFormProfile(): void {
    const id = this.tokenService.token as string;
    this.subscription = this.adminService.getProfile({ id }).subscribe({
      next: (res) => {
        this.formProfile.patchValue({
          name: res.name,
          email: res.email,
          phone: res.phone,
        });
      },
      error: (error: HttpErrorResponse) => {
        this.alerService.alertError(error);
      },
    });
  }

  updateUser(): void {
    const body = this.formProfile.value;
    const id = this.tokenService.token as string;
    this.adminService.updateProfile(id, body).subscribe({
      next: () => {},
      error: (error: HttpErrorResponse) => {
        this.alerService.alertError(error);
      },
    });
  }

  openChangePassword(): void {
    this.modalService.open(ChangePasswordComponent, { centered: true });
  }
}
