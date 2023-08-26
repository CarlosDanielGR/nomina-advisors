import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSimpleSidebarModule } from 'ng-simple-sidebar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NominaComponent } from './pages/nomina/nomina.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProfileComponent,
    CommissionsComponent,
    SalesComponent,
    NominaComponent,
  ],
  imports: [NgSimpleSidebarModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
