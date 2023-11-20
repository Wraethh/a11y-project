import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'a11y-header',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
