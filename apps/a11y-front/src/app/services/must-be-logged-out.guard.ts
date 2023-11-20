import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {map, take} from "rxjs";

export const mustBeLoggedOutGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn$.pipe(take(1), map((isLoggedIn) => {
    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) {
      return true;
    }
    router.navigateByUrl('/403-out');
    return false;
  }));
};
