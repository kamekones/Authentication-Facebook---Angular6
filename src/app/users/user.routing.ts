import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';

import { UserComponent } from './user.component';
import {AdminComponent } from '../admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profiles/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorComponent } from './components/pageError/error.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
            { path: 'cart', component: CartComponent },


        ]
    },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    // { path: '/*', redirectTo: '', pathMatch: 'full' },

];



export const appRoutingProviders: any = [AuthGuard, AdminGuard];
export const userRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
