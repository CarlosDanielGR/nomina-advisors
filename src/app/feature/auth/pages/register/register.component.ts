import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formRegister = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  sendDataRegister(): void {
    console.log(this.formRegister.value);
  }
}
