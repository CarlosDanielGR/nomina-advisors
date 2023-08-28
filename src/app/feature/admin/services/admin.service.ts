import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly API_URL = `${environment.API_URL}auth/`;

  private readonly API_URL_ADMIN = `${environment.API_URL}admin/`;

  constructor(private readonly http: HttpClient) {}

  getProfile(params: { id: string }): Observable<User> {
    return this.http.get<User>(`${this.API_URL}profile`, { params });
  }

  updateProfile(id: string, body: User): Observable<User> {
    return this.http.patch<User>(`${this.API_URL}profile`, body, {
      params: {
        id,
      },
    });
  }

  removeDataUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.API_URL}profile`, { params: { id } });
  }

  getAllNomina(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL_ADMIN}nomina`);
  }
}
