import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserDTO } from '../../models/user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: UserDTO = { username: '', password: '' };
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

register() {
  console.log('Register payload:', this.user); // check what you send
  this.authService.register(this.user).subscribe({
    next: (res) => {
      console.log('Registration response:', res);
      this.successMessage = 'Registered successfully!';
      setTimeout(() => this.router.navigate(['/login']), 1500);
    },
    error: (err) => {
      console.error('Registration error:', err);
      this.errorMessage = 'Registration failed!';
    }
  });
}
}
