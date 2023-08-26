import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
})
export class CommonFormComponent implements OnInit {
  @Input() formGroup!: UntypedFormGroup;

  @Input() id: string = 'common';

  commonForm!: UntypedFormGroup;

  constructor(private readonly formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.commonForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    Object.keys(this.commonForm.value).forEach((key) => {
      this.formGroup.addControl(key, this.commonForm.controls[key]);
    });
  }
}
