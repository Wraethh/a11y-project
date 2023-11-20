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
    path: 'about',
    loadChildren: () => import('./pages/about-page/about.routes').then(m => m.aboutRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-page/register.routes').then(m => m.registerRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login.routes').then(m => m.loginRoutes)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
