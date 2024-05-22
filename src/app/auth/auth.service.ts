import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails$ = new BehaviorSubject<User|null>(null);
  constructor(private httpClient: HttpClient, private router: Router) { 
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      this.setUserDetails(JSON.parse(storedUser));
      return;
    }
  }

  // Attempt to login a user
  loginUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      switchMap(() => this.httpClient.post('login', userDetails)),
      switchMap(() => this.httpClient.get('api/user')),
    ).subscribe((res: any) => {
      this.setUserDetails(res);
      this.router.navigate(['/']);
    });
  }

  // Create a new user within the application
  registerUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      switchMap(() => this.httpClient.post('register', userDetails)),
      switchMap(() => this.httpClient.get('api/user')),
    ).subscribe((res: any) => {
      this.setUserDetails(res);
      this.router.navigate(['/']);
    });
  }

  // Fetch details from the backend for the logged in user
  fetchLoggedInUser(): void {
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
      localStorage.setItem('currentUser', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('currentUser');
    }
  }
}