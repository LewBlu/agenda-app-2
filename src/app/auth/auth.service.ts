import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // Attempt to login a user
  loginUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      mergeMap(() => this.httpClient.post('login', userDetails))
    ).subscribe(res => console.log(res));
  }

  // Create a new user within the application
  registerUser(userDetails: any) {
    this.httpClient.get('sanctum/csrf-cookie')
    .pipe(
      mergeMap(() => this.httpClient.post('register', userDetails))
    ).subscribe(res => console.log(res));
  }

  // Fetch details from the backend for the logged in user
  getLoggedInUser() {
    this.httpClient.get('api/user').subscribe(res => console.log(res));
  }

  // End the users session within the api
  logoutUser() {
    this.httpClient.post('logout', {}).subscribe(res => console.log(res));
  }
}
