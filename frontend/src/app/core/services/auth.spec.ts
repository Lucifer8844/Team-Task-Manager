// import { TestBed } from '@angular/core/testing';

// import { Auth } from './auth';

// describe('Auth', () => {
//   let service: Auth;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(Auth);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
      })
    );
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}