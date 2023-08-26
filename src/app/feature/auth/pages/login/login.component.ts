import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private readonly router: Router) {}

  sendData(): void {
    console.log(this.formLogin.value);
    this.router.navigate(['/admin']);
  }
}
