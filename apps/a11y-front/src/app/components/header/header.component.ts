import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'a11y-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  private router = inject(Router);
  authService = inject(AuthService);
  menuOpen = false;
  constructor(private cd: ChangeDetectorRef) { }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.cd.detectChanges();
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
    this.toggleMenu();
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
    this.toggleMenu();
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
    this.toggleMenu();
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
    this.toggleMenu();
  }

  goToNews() {
    this.router.navigateByUrl('/news');
    this.toggleMenu();
  }

  logout() {
    this.authService.logout();
    this.toggleMenu();
  }

}
