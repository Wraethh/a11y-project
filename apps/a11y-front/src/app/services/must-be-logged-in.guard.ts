import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";
import {map, take} from "rxjs";

export const mustBeLoggedInGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn$.pipe(take(1), map((isLoggedIn) => {
    if (isLoggedIn) {
      return true;
    }
    router.navigateByUrl('/403-in');
    return false;
  }));
};
