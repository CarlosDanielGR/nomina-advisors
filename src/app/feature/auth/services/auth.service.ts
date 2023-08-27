import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CreateUser } from '../interfaces/register.interface';
import { Login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = `${environment.API_URL}auth/`;

  constructor(private readonly http: HttpClient) {}

  createUser(body: CreateUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.API_URL}register`, body);
  }

  loginUser(body: Login): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.API_URL}login`, body);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  set newToken(token: string) {
    localStorage.setItem('token', token);
  }
}
