import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "../../components/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../../components/header/header.component";
import {RegisterModel} from "../register-page/register-page.component";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {take} from "rxjs";

export class LoginModel {
  constructor(public password: string, public email: string) {
  }
}

@Component({
  selector: 'a11y-login-page',
  standalone: true,
    imports: [CommonModule, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  auth = inject(Auth);
  data: LoginModel = new LoginModel('', '');


  doNothing($event: ClipboardEvent) {
    $event.preventDefault();
  }

  reset() {
    this.data = new RegisterModel('', '', '');
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.data.email, this.data.password).then(() => {
      alert('Logged in!');
    }).catch(() => {
      alert('Error occurred');
    });
  }
}
