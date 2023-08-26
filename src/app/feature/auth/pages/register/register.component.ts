import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formRegister!: UntypedFormGroup;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formRegister = this.formBuilder.group({
      name: [''],
    });
  }

  sendData(): void {
    console.log(this.formRegister.value);
    this.router.navigate(['/admin']);
  }
}
