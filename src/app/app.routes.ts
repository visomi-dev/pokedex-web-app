import { Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  },
];
