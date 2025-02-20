import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { authGuard } from '../auth.guard';
import { MainIndexComponent } from '../components/main-index/main-index.component';
import { UserComponent } from '../components/user/user.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: UserComponent },
  { path: 'index', component: MainIndexComponent, canActivate: [authGuard] },
];
