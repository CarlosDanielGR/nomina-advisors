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
import { AdminService } from './services/admin.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageCommissionComponent } from './pages/commissions/components/manage-commission/manage-commission.component';
import { SaleSimulatorComponent } from './pages/sales/components/sale-simulator/sale-simulator.component';
import { NominaPdfComponent } from './pages/nomina/components/nomina-pdf/nomina-pdf.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProfileComponent,
    CommissionsComponent,
    SalesComponent,
    NominaComponent,
    ChangePasswordComponent,
    ManageCommissionComponent,
    SaleSimulatorComponent,
    NominaPdfComponent,
  ],
  imports: [
    NgSimpleSidebarModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    SharedModule,
  ],
  providers: [AdminService],
})
export class AdminModule {}
