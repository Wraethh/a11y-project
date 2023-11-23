import { Route } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {mustBeLoggedOutGuard} from "./services/must-be-logged-out.guard";
import {mustBeLoggedInGuard} from "./services/must-be-logged-in.guard";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ListsPageComponent} from "./pages/lists-page/lists-page.component";
import {NotAllowedLoggedInPageComponent} from "./pages/not-allowed-logged-in-page/not-allowed-logged-in-page.component";
import {
  NotAllowedLoggedOutPageComponent
} from "./pages/not-allowed-logged-out-page/not-allowed-logged-out-page.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsDetailsPageComponent} from "./pages/news-details-page/news-details-page.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about.routes').then(m => m.aboutRoutes)
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [mustBeLoggedOutGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [mustBeLoggedOutGuard]
  },
  {
    path: 'lists',
    component: ListsPageComponent,
    canActivate: [mustBeLoggedInGuard]
  },
  {
    path: 'news/:id',
    component: NewsDetailsPageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: '403-in',
    component: NotAllowedLoggedInPageComponent,
  },
  {
    path: '403-out',
    component: NotAllowedLoggedOutPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
