import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  formPassword!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormPassword();
  }

  private initFormPassword(): void {
    this.formPassword = this.formBuilder.group({
      currentPassword: [''],
      newPassword: [''],
    });
  }
}
