import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

//AppRoutingModule
import { AppRoutingModule } from './app-routing.module';


//Service
import { SpinnerService } from './_shared/@theme/services/spinner.service'
import { AuthenticationService } from './_shared/api_services/authentication.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [
    SpinnerService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
