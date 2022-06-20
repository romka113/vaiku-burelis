import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  public password: string = '';
  public repass: string = '';
  public error: string = '';
  public isLoginMode = true;
  private errorFunction = (error: any) => {
    console.log(error.error.error.message);
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        this.error = 'toks emailas egzistuoja';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        this.error = 'Per daug meginimu';
        break;
      case 'WEAK_PASSWORD':
        this.error = 'Slaptazodis turi buti ne trumpesnis nei 6 simboliai';
        break;
      case 'EMAIL_NOT_FOUND':
        this.error = 'Nurodytas el.pastas nerastas';
        break;
      case 'INVALID_PASSWORD':
        this.error = 'Nurodytas slaptazodis neteisingas';
        break;
    }
  };
  private onsuccessLog = (response: any) => {
    this.router.navigate(['']);
  };
  ngOnInit(): void {}
  public onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.isLoginMode) {
      this.auth.login(form.value.email, form.value.password).subscribe({
        next: this.onsuccessLog,
        error: this.errorFunction,
      });
    } else {
      this.auth.register(form.value.email, form.value.password).subscribe({
        next: this.onsuccessLog,
        error: this.errorFunction,
      });
    }
  }
}
