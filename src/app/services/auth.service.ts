import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Credentials {
  email: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject(false);
  public loggedInObservable = this.loggedInSubject.asObservable();

  constructor() {
    this.loadSession();
  }

  login(credentials: Credentials): void {
    console.log('Login with :', credentials);
    this.startSession();
    this.loggedInSubject.next(true);
  }

  loadSession(): void {
    if (localStorage.getItem('authToken')) {
      this.loggedInSubject.next(true);
    }
  }

  private startSession() {
    localStorage.setItem('authToken', 'fake');
  }

  logout(): void {
    console.log('Logout');
    this.stopSession();
    this.loggedInSubject.next(false);
  }

  private stopSession() {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  hasPermission(perm: string): boolean {
    // check local token
    if (!this.isLoggedIn()) {
      // console.log('Not logged In so no check permission !')
      return false;
    }

    // console.log('Logged In and permission !')
    // appel http
    return true;
  }
}
