import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../../services/auth.service';
import { CreateUser } from '../../interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formRegister!: UntypedFormGroup;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly authService: AuthService,
    private readonly alerService: AlertService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      experience: ['', [Validators.required]],
    });
  }

  sendData(): void {
    const body = this.formRegister.value as CreateUser;
    body.experience = +body.experience;
    this.authService.createUser(body).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (error: HttpErrorResponse) => {
        const { message } = error.error;
        this.alerService.newAlert = {
          type: 'danger',
          message: typeof message === 'string' ? message : message[0],
        };
      },
    });
  }
}
