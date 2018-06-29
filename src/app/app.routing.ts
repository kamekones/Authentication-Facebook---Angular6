import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component'
import { AdminComponent } from './admin/admin.component'


const appRoutes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: UserComponent },
  { path: 'admin', component: AdminComponent }
];



export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
