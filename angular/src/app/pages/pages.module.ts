import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

/**
  All components for Auth
*/
const PAGES_COMPONENTS = [
  DashboardComponent,
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
