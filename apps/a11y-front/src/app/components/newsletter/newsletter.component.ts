import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from "rxjs";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'a11y-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {

  show = false;
  email = '';

  close() {
    this.show = false;
  }

  signIn() {
    alert('Thank you for signing in!');
  }
}
