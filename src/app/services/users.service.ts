import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTResponse } from '../models/JWTResponse';
import { Credentials } from '../models/Credentials';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials) {
    return this.http.post<JWTResponse>(
      'http://localhost:8000/api/login',
      credentials,
      {
        observe: 'body'
      }
    );
  }

  me() {
    return this.http.post<User>('http://localhost:8000/api/me', {
      observe: 'body'
    });
  }

  logout() {
    return this.http.post('http://localhost:8000/api/logout', {
      observe: 'response'
    });
  }
}
