import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profiles/profile.component';
import { ErrorComponent } from './errorPage/error.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent }
  ];



export const appRoutingProviders: any = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
