import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Main Routes

const routes: Routes = [
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/auth/login' },
];

/**
  Extra configuration options for the Router
*/
const config: ExtraOptions = {
  /**
    Do not use the hashtag in the url
  */
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
