import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    if (!this.element.nativeElement.contains(event.target)){
      this.showProfileMenu = false;
    }
  }
  showProfileMenu: boolean = false;

  constructor(private element: ElementRef, private authService: AuthService) {}

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  hideProfileMenu(event: Event) {
    if (!this.element.nativeElement.contains(event.target)){
      this.showProfileMenu = false;
    }
  }

  // When the user clicks 'Sign out' from within the profile menu
  onLogout() {
    this.authService.logoutUser();
  }
}
