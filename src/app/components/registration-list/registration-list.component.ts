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
  public IsmodelShow = true;
  public person: string | undefined = '';
  constructor(private registrationService: RegistrationService) {}
  private loadRegistrations() {
    this.registrationService.getRegistrations().subscribe((result) => {
      this.childrenReg = result;
    });
  }

  ngOnInit(): void {
    this.loadRegistrations();
  }

  public close(id: string | undefined) {
    this.person = id;
    this.IsmodelShow = false;
  }
  public cancel() {
    this.IsmodelShow = true;
  }
  public onDeleteRegistration(id: string | undefined) {
    this.cancel();
    if (id != undefined) {
      this.registrationService.deleteRegistration(id).subscribe(() => {
        this.loadRegistrations();
      });
    }
  }
}
