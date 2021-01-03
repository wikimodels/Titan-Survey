import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { AppMaterialModule } from '../material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AnalyticsComponent, NavBarComponent, UsersComponent],
  imports: [CommonModule, AppMaterialModule, AnalyticsRoutingModule],
  exports: [AnalyticsComponent, UsersComponent, NavBarComponent],
})
export class AnalyticsModule {}
