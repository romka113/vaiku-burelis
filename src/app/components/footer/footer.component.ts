import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public user: User | null = null;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.user;
    this.auth.userUpdate.subscribe(() => {
      this.user = this.auth.user;
    });
  }
}
