// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  // tell Angular to treat response as text
  login(user: UserDTO): Observable<string> {
    return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'text' });
  }

  register(user: UserDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  registerAdmin(user: UserDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register-admin`, user);
  }
}
