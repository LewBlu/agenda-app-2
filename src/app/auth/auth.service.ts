import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails$ = new BehaviorSubject<User|null>(null);
  constructor(private httpClient: HttpClient) { }

  // Attempt to login a user
  loginUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      switchMap(() => this.httpClient.post('login', userDetails)),
      switchMap(() => this.httpClient.get('api/user')),
    ).subscribe((res: any) => this.setUserDetails(res));
  }

  // Create a new user within the application
  registerUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      switchMap(() => this.httpClient.post('register', userDetails)),
      switchMap(() => this.httpClient.get('api/user')),
    ).subscribe((res: any) => this.setUserDetails(res));
  }

  // Fetch details from the backend for the logged in user
  fetchLoggedInUser() {
    this.httpClient.get('api/user').subscribe((res: any) => this.setUserDetails(res));
  }

  // End the users session within the api
  logoutUser() {
    this.httpClient.post('logout', {}).subscribe(res => this.setUserDetails(null));
  }

  // Sets the behavior subject that contains the users details
  setUserDetails(userDetails: User|null) {
    this.userDetails$.next(userDetails);
    if(userDetails !== null) {
      localStorage.setItem('user', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('user');
    }
  }

  checkLoggedIn() {
    return this.userDetails$.value === null;
  }
}
