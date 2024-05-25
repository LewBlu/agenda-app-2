import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { User } from './shared/models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'agenda-app';
  showNavbar: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userDetails$.subscribe((user: User | null) => {
      this.showNavbar = user ? true : false;
    });
  }
}
