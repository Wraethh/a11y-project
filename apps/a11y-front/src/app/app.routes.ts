import { Route } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact.routes').then(m => m.contactRoutes)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
