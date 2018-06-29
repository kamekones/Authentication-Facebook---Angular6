import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profiles/profile.component';
import { CartComponent } from './cart/cart.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'shoppingcart', component: CartComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      }
    ]
  },
  { path: '**',   redirectTo: '', pathMatch: 'full' },
];



export const appRoutingProviders: any = [AuthGuard, AdminGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
