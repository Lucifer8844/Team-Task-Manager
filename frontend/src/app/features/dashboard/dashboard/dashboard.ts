import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../core/services/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  role: string | null = '';

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.role = this.auth.getRole();
    console.log("ROLE:", this.role); // debug
  }

  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}