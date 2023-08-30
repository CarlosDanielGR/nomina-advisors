import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get token(): string | null {
    return localStorage.getItem('token');
  }

  set newToken(token: string) {
    localStorage.setItem('token', token);
  }
}
