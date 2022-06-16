import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly key = 'AIzaSyC1NC_sys_3SlWaz_HGenoGvZX9HCWfGck';
  private readonly url = 'https://identitytoolkit.googleapis.com/v1/accounts';

  constructor(private http: HttpClient) {}
  public register(email: string, password: string) {
    return this.http.post(this.url + ':signUp?key=' + this.key, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
