import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // Attempt to login a user
  loginUser(userDetails: any) {
    this.httpClient.post('//localhost/login', userDetails, { withCredentials: true, headers: {Accept: 'application/json', }}).subscribe();
  }

  // Create a new user within the application
  registerUser(userDetails: any) {
    this.httpClient.post('//localhost/register', userDetails, { withCredentials: true, headers: {Accept: 'application/json', }}).subscribe();
  }
}
