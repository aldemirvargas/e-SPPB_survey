import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTResponse } from '../models/JWTResponse';
import { Credentials } from '../models/Credentials';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials) {
    return this.http.post<JWTResponse>(
      `${environment.apiUrl}/login`,
      credentials,
      {
        observe: 'body'
      }
    );
  }

  me() {
    return this.http.post<User>(`${environment.apiUrl}/me`, {
      observe: 'body'
    });
  }

  logout() {
    return this.http.post(`${environment.apiUrl}/logout`, {
      observe: 'response'
    });
  }
}
