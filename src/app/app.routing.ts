import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component'


const appRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: UserComponent },
];



export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
