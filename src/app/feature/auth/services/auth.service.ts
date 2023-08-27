import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CreateUser } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = `${environment.API_URL}auth/`;

  constructor(private readonly http: HttpClient) {}

  createUser(body: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(`${this.API_URL}register`, body);
  }
}
