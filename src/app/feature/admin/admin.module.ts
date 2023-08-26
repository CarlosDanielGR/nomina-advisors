import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NominaComponent } from './pages/nomina/nomina.component';
import { ChangePasswordComponent } from './pages/profile/components/change-password/change-password.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProfileComponent,
    CommissionsComponent,
    SalesComponent,
    NominaComponent,
    ChangePasswordComponent,
  ],
  imports: [
    NgSimpleSidebarModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
})
export class AdminModule {}
