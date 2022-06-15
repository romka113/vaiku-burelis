import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Registration } from '../../models/registration';
import { ActivatedRoute, Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.css'],
})
export class RegistrationEditComponent implements OnInit {
  public registration: Registration = new Registration();
  public id: string = '';
  public load = true;
  public spalava: string = '';
  public error = false;
  public erroCode: string = '';
  constructor(
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.load = false;
    this.registrationService.getRegistration(this.id).subscribe({
      next: (result) => {
        this.load = true;
        this.registration = result;
      },
      error: (error) => {
        this.error = true;
        this.erroCode = error.status;
      },
    });
  }
  colorChange() {
    setInterval(() => {
      document.body.style.background =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 2000);
  }
  onUpdate() {
    this.registrationService.updateRegistration(this.registration).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.error = true;
        if (error.status == 401) {
          this.erroCode = 'Neturite leidimo redaguoti irasu';
        } else {
          this.erroCode = error.status;
        }
      },
    });
  }
}
