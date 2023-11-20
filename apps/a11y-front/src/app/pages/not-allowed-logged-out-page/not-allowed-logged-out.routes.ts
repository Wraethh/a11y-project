import {Route} from '@angular/router';
import {NotAllowedLoggedOutPageComponent} from "./not-allowed-logged-out-page.component";

export const notAllowedLoggedOutRoutes: Route[] = [
  {
    path: '',
    component: NotAllowedLoggedOutPageComponent
  },
];
