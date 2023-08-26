import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES_ADMIN } from 'src/app/shared/constant/route.constant';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NominaComponent } from './pages/nomina/nomina.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: ROUTES_ADMIN.COMMISSIONS,
        component: CommissionsComponent,
      },
      {
        path: ROUTES_ADMIN.SALES,
        component: SalesComponent,
      },
      {
        path: ROUTES_ADMIN.NOMINA,
        component: NominaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
