import {Route} from '@angular/router';
import {NotAllowedLoggedInPageComponent} from "./not-allowed-logged-in-page.component";

export const notAllowedLoggedInRoutes: Route[] = [
  {
    path: '',
    component: NotAllowedLoggedInPageComponent
  },
];
