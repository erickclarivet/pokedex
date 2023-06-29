import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInObservable.subscribe(
      (value) => (this.isLoggedIn = value)
    );
  }

  login(): void {
    this.authService.login({ email: 'test@gmail.com', pwd: '123' });
  }

  logout(): void {
    this.authService.logout();
  }
}
