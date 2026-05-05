// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.html'
// })
// export class Login {

//   username: string = '';
//   password: string = '';
//   error: string = '';

//   login() {
//     console.log(this.username, this.password);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  username = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  // login() {
  //   this.auth.login({
  //     username: this.username,
  //     password: this.password
  //   }).subscribe({
  //     next: () => {
  //       const role = this.auth.getRole();

  //       if (role === 'ROLE_ADMIN') {
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         this.router.navigate(['/dashboard']);
  //       }
  //     },
  //     error: () => {
  //       this.error = 'Invalid credentials';
  //     }
  //   });
  // }
login() {
  this.auth.login({
    username: this.username,
    password: this.password
  }).subscribe({
    next: (res: any) => {
      console.log("LOGIN SUCCESS:", res);

      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role); // 🔥 ADD THIS

      this.router.navigate(['/dashboard']);
    },
    error: () => {
      this.error = 'Invalid credentials';
    }
  });
}
}