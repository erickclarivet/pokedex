import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  password : string = "";
  email : string = "";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInObservable.subscribe(
      (value) => (this.isLoggedIn = value)
    );
  }

  login(email : string, password: string): void {
    this.authService.login({ email: email, pwd: password });
  }

  logout(): void {
    this.authService.logout();
  }
}
