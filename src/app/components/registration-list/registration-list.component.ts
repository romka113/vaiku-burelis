import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/registration';
import { RegistrationService } from '../../services/registration.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  public childrenReg: Registration[] = [];
  public user: User | null = null;
  public IsmodelShow = true;
  public person: string | undefined = '';
  constructor(
    private registrationService: RegistrationService,
    private auth: AuthService
  ) {}
  private loadRegistrations() {
    this.registrationService.getRegistrations().subscribe((result) => {
      this.childrenReg = result;
    });
  }

  ngOnInit(): void {
    this.loadRegistrations();
    this.user = this.auth.user;
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
