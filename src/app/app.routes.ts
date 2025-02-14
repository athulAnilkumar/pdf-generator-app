import { Routes } from '@angular/router';
import { IndexPageComponent } from '../components/index-page/index-page.component';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexPageComponent, canActivate: [authGuard] },
];
