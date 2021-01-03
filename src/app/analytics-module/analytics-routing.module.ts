import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ANALYTICS, USERS } from '../consts/routes.consts';
import { AnalyticsComponent } from './analytics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    outlet: 'analytics',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}
