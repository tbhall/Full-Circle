import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

/**
  All components for Auth
*/
const AUTH_COMPONENTS = [
  LoginComponent,
  AuthComponent,
];

@NgModule({
  imports: [
    AuthRoutingModule,
  ],
  declarations: [
    ...AUTH_COMPONENTS,
  ],
})
export class AuthModule {
}
