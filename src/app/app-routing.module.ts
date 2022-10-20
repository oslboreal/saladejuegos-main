import {   canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const redirectLoggedInToAdmin = () => redirectLoggedInTo(['admin-dashboard']);


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./navigation/auth/auth.module').then((m) => m.AuthModule),
      ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./navigation/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      ...canActivate(redirectUnauthorizedToLogin),
      data: {
        role: 'USER'
      }
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./navigation/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
      ...canActivate(redirectUnauthorizedToLogin),
      data: {
        role: 'ADMIN'
      }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}