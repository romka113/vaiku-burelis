import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly key = 'AIzaSyC1NC_sys_3SlWaz_HGenoGvZX9HCWfGck';
  private readonly url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  public user: User | null = null;
  private successLoginFun = (response: User) => {
    this.user = response;
    localStorage.setItem('user', JSON.stringify(this.user));
  };

  constructor(private http: HttpClient) {}
  public register(email: string, password: string) {
    return this.http
      .post<User>(this.url + ':signUp?key=' + this.key, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(tap(this.successLoginFun));
  }
  public login(email: string, password: string) {
    return this.http
      .post<User>(this.url + ':signInWithPassword?key=' + this.key, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(tap(this.successLoginFun));
  }
  public autoLogin() {
    let data = localStorage.getItem('user');
    if (data != null) {
      this.user = JSON.parse(data);
    }
  }
}
