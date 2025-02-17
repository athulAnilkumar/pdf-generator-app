import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from '../auth.guard';
import { MainIndexComponent } from '../components/main-index/main-index.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: MainIndexComponent, canActivate: [authGuard] },
];
