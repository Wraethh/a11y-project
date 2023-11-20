import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'a11y-not-allowed-logged-out-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-allowed-logged-out-page.component.html',
  styleUrls: ['./not-allowed-logged-out-page.component.scss'],
})
export class NotAllowedLoggedOutPageComponent {
}
