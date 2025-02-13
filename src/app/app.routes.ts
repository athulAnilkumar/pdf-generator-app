import { Routes } from '@angular/router';
import { IndexPageComponent } from '../components/index-page/index-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: IndexPageComponent },
];
