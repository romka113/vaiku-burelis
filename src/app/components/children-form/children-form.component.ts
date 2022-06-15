import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css'],
})
export class ChildrenFormComponent implements OnInit {
  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  public summerCamp(f: NgForm) {
    console.log('Forma issiusta');
    this.registrationService.addRegistration(f.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
