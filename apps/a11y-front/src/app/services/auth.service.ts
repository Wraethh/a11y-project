import {inject, Injectable, signal} from "@angular/core";
import {Auth} from "@angular/fire/auth";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  isLoggedIn = signal(false);
  isLoggedIn$ = new ReplaySubject(1);

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        this.isLoggedIn.set(true);
        this.isLoggedIn$.next(true);
      } else {
        this.isLoggedIn.set(false);
        this.isLoggedIn$.next(false);
      }
    });
  }

  logout() {
    this.auth.signOut();
  }
}
