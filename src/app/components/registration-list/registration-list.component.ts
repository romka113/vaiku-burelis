import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/registration';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  public childrenReg: Registration[] = [];
  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe((result) => {
      this.childrenReg = result;
    });
  }
}
