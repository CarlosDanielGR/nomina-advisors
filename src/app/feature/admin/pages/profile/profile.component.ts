import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChangePasswordComponent } from './components/change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formProfile!: UntypedFormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initFormProfile();
    this.setFormProfile();
  }

  private initFormProfile(): void {
    this.formProfile = this.formBuilder.group({
      name: [''],
      email: [{ value: '', disabled: true }],
      phone: [''],
    });
  }

  private setFormProfile(): void {
    this.formProfile.patchValue({
      name: 'Pepito perez',
      email: 'pep@test.com',
      phone: '3207536244',
    });
  }

  openChangePassword(): void {
    this.modalService.open(ChangePasswordComponent, { centered: true });
  }
}
