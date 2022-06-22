import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';
import { User } from '../../models/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  public user: User | null = null;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  changePasswordd(f: NgForm) {
    if (this.auth.user) {
      this.auth.changePassword(f.value.password).subscribe({
        next: (response: User) => {
          this.router.navigate(['']);
        },
        error: (error) => {
          return console.log(error.error);
        },
      });
    }
  }
}
