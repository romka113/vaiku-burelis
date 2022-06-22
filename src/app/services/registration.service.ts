import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../models/registration';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private readonly url: string =
    'https://techapziura-674ce-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private hhtp: HttpClient, private auth: AuthService) {}
  public addRegistration(registration: Registration) {
    return this.hhtp.post(this.url + 'registrations.json', registration);
  }
  public getRegistrations() {
    return this.hhtp
      .get<{ [key: string]: Registration }>(this.url + 'registrations.json')
      .pipe(
        map((response) => {
          let result: Registration[] = [];
          for (let key in response) {
            result.push({ ...response[key], id: key });
          }
          return result;
        })
      );
  }
  public getRegistration(id: string) {
    return this.hhtp
      .get<Registration>(this.url + 'registrations/' + id + '.json')
      .pipe(
        map((response) => {
          response.id = id;
          return response;
        })
      );
  }
  public updateRegistration(registration: Registration) {
    return this.hhtp.patch(
      this.url +
        'registrations/' +
        registration.id +
        '.json?auth=' +
        this.auth.user?.idToken,
      registration
    );
  }
  public deleteRegistration(id: string) {
    return this.hhtp.delete(this.url + 'registrations/' + id + '.json');
  }
}
