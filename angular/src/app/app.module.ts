import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//AppRoutingModule
import { AppRoutingModule } from './app-routing.module';


//Service
import { SpinnerService } from './_shared/@theme/services/spinner.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
