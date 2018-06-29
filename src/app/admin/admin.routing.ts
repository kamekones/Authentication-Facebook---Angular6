import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';


import { AdminComponent } from './admin.component';
import { AccountComponent } from './account/account.component';
import { BannerComponent } from './banner/banner.component';
import { BookComponent } from './book/book.component';
import { BuyComponent } from './buy/buy.component';
import { InboxComponent } from './inbox/inbox.component';
import { DashboardComponent } from './dashboards/dashboard.component';
import { MemberComponent } from './members/member.component';
import { ModuleComponent } from './module/module.component';
import { SellComponent } from './sell/sell.component';
import { SettingComponent } from './setting/setting.component';
import { TransportComponent } from './transport/transport.component';

import { AdminGuard } from '../users/guards/admin.guard';

const appRoutes: Routes = [
  { path: 'admin', 
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
      { path: 'module', component: ModuleComponent, canActivate: [AdminGuard]},
      { path: 'member', component: MemberComponent, canActivate: [AdminGuard]},
      { path: 'banner', component: BannerComponent, canActivate: [AdminGuard]},
      { path: 'book', component: BookComponent, canActivate: [AdminGuard]},
      { path: 'sell', component: SellComponent, canActivate: [AdminGuard]},
      { path: 'buy', component: BuyComponent, canActivate: [AdminGuard]},
      { path: 'inbox', component: InboxComponent, canActivate: [AdminGuard]},
      { path: 'setting', component: SettingComponent, canActivate: [AdminGuard]},
      { path: 'account', component: AccountComponent, canActivate: [AdminGuard]},
      { path: 'transport', component: TransportComponent, canActivate: [AdminGuard]},
      // { path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full' }
    ]
  
  },
  
  
];



export const appRoutingProviders: any = [];
export const adminRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
