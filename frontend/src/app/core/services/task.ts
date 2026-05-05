
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Task {
  private baseUrl = 'https://intuitive-consideration-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getMyTasks() {
    return this.http.get(`${this.baseUrl}/member/tasks`);
  }

  assignTask(data: any) {
    return this.http.post(`${this.baseUrl}/admin/tasks`, data);
  }

  updateStatus(taskId: number, status: string) {
    return this.http.patch(`${this.baseUrl}/member/tasks/${taskId}?status=${status}`, {});
  }
}
