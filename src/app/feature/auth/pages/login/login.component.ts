import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: FormGroup = new FormGroup({});

  constructor(private readonly router: Router) {}

  sendData(): void {
    console.log(this.formLogin.value);
    this.router.navigate(['/admin']);
  }
}
