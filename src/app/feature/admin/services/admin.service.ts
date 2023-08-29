import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../interfaces/profile.interface';
import { Sale } from '../interfaces/sale.interface';
import { Commission } from '../interfaces/commission.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly API_URL = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getProfile(params: { id: string }): Observable<User> {
    return this.http.get<User>(`${this.API_URL}auth/profile`, { params });
  }

  updateProfile(id: string, body: User): Observable<User> {
    return this.http.patch<User>(`${this.API_URL}auth/profile`, body, {
      params: {
        id,
      },
    });
  }

  removeDataUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.API_URL}auth/profile`, {
      params: { id },
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}auth/users`);
  }

  getAllNomina(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}admin/nomina`);
  }

  createSale(body: Sale): Observable<void> {
    return this.http.post<void>(`${this.API_URL}sales`, body);
  }

  createComission(body: Commission[]): Observable<void> {
    return this.http.post<void>(`${this.API_URL}commission`, body);
  }

  getAllCommissions(): Observable<Commission[]> {
    return this.http.get<Commission[]>(`${this.API_URL}commission`);
  }

  removeCommission(): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}commission`);
  }

  updateCommission(body: any[]): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}commission`, body);
  }
}
