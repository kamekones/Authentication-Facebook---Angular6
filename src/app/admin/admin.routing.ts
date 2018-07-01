import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router';


import { AdminComponent } from './admin.component';
import { AccountComponent } from './components/account/account.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookComponent } from './components/book/book.component';
import { BuyComponent } from './components/buy/buy.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DashboardComponent } from './components/dashboards/dashboard.component';
import { MemberComponent } from './components/members/member.component';
import { ModuleComponent } from './components/module/module.component';
import { SellComponent } from './components/sell/sell.component';
import { SettingComponent } from './components/setting/setting.component';
import { TransportComponent } from './components/transport/transport.component';

import { AdminGuard } from '../users/guards/admin.guard';

const appRoutes: Routes = [
  { path: 'admin', 
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: DashboardComponent, canActivate: [AdminGuard]},
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
