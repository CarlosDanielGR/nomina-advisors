import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formRegister!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
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
