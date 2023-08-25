import { NgModule } from '@angular/core';

import { NgSimpleSidebarModule } from 'ng-simple-sidebar';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AdminComponent, SidebarComponent],
  imports: [NgSimpleSidebarModule, AdminRoutingModule],
})
export class AdminModule {}
