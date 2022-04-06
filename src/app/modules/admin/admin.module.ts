import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    FullComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule
  ]
})
export class AdminModule { }
