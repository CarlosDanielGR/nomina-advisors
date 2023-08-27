import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private readonly authService: AuthService,
    private readonly alerService: AlertService,
    private readonly router: Router
  ) {}

  sendData(): void {
    const body = this.formLogin.value;
    this.authService.loginUser(body).subscribe({
      next: (res) => {
        this.authService.newToken = res.token;
        this.router.navigate(['/admin']);
      },
      error: (error: HttpErrorResponse) => {
        this.alerService.alertError(error);
      },
    });
  }
}
