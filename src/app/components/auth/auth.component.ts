import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  public onSubmit(form: NgForm) {
    console.log(form.value);
    this.auth
      .register(form.value.email, form.value.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
