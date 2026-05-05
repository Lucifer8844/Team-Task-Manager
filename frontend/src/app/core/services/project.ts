

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Project {
  private baseUrl = 'https://intuitive-consideration-production.up.railway.app/api/admin';

  constructor(private http: HttpClient) {}

  createProject(data: any) {
    return this.http.post(`${this.baseUrl}/projects`, data);
  }

  getProjects() {
    // Cleaned up: No manual headers needed
    return this.http.get(`${this.baseUrl}/projects`);
  }
}
