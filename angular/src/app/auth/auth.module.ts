import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
    FormsModule,
  ],
  declarations: [
    ...AUTH_COMPONENTS,
  ],
})
export class AuthModule {
}
