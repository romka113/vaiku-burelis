import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../models/registration';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private readonly url: string =
    'https://techapziura-674ce-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private hhtp: HttpClient) {}
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
}
