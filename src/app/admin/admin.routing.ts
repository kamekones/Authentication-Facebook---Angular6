import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';


import { AdminComponent } from './admin.component';
import { MemberComponent } from './members/member.component';

import { AdminGuard } from '../users/guards/admin.guard';

const appRoutes: Routes = [
  { path: 'admin', 
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'member', component: MemberComponent, canActivate: [AdminGuard]}

    ]
  
  },
  
];



export const appRoutingProviders: any = [];
export const adminRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
