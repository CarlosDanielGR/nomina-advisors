import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'commissions',
        component: CommissionsComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'nomina',
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
