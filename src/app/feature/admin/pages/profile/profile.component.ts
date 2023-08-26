import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formProfile!: UntypedFormGroup;

  constructor(private readonly formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initFormProfile();
  }

  private initFormProfile(): void {
    this.formProfile = this.formBuilder.group({
      name: [''],
      email: [{ value: '', disabled: true }],
      phone: [''],
    });
  }

  private setFormProfile(): void {}
}
