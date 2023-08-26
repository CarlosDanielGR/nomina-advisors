import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formProfile!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

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
