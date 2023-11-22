import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'a11y-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent {
  showCookieBanner = true;

  constructor() {
    document.cookie='facebookId=123;max-age=31536000;path=/'
    if (document.cookie.indexOf('cookies') >= 0) {
      this.showCookieBanner = false;
    }
  }


  dismissBanner() {
    document.cookie = 'cookies=true;max-age=31536000;path=/';
    this.showCookieBanner= false;
  }
}
