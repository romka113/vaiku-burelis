import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private auth: AuthService) {}

  public user: User | null = null;

  ngOnInit(): void {
    this.user = this.auth.user;
    this.auth.userUpdate.subscribe(() => {
      this.user = this.auth.user;
    });
  }
  public logOut() {
    this.auth.logOut();
  }
}
