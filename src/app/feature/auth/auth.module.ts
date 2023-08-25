import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [AuthRoutingModule],
})
export class AuthModule {}
