import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = JSON.parse(sessionStorage.getItem('userData') as string);
  user: IUser | null = null;

  constructor( private http: HttpClient) { }

  register(username: string, email: string, password: string) {
    return this.http.post<IUser>('/users/register', {username, email, password})
  }
  login( email: string, password: string) {
    return this.http.post<IUser>('/users/login', { email, password})
  }

  logout() {
    return this.http.get<void>('/users/logout');
  }
}
