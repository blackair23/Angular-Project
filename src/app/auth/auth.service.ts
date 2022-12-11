import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  register(username: string, email: string, password: string) {
    return this.http.post<any>('/users/register', {username, email, password})
  }
  login( email: string, password: string) {
    return this.http.post<any>('/users/login', { email, password})
  }
}
