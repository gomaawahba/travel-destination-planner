// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserDTO } from '../../models/user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserDTO = { username: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login payload: ', this.user);

    this.authService.login(this.user).subscribe({
      next: (token: string) => {
        console.log('JWT Token: ', token);
        localStorage.setItem('token', token);

        // decode JWT to get role
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('Decoded JWT payload:', payload);

        if (payload.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-panel']);
        }
      },
      error: (err) => {
        console.error('Login error: ', err);
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
