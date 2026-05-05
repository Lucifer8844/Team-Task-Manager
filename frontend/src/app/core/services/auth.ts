import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  getRole(): string | null {
  return localStorage.getItem('role'); 
}

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}