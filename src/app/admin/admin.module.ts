import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { adminRouting, appRoutingProviders } from './admin.routing';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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

    
export const firebaseConfig = {
  apiKey: "AIzaSyCvxxjDMjIG5RfYXHv0V1HjfhWVfaGqcjM",
  authDomain: "mebooks-5de3f.firebaseapp.com",
  databaseURL: "https://mebooks-5de3f.firebaseio.com",
  projectId: "mebooks-5de3f",
  storageBucket: "mebooks-5de3f.appspot.com",
  messagingSenderId: "411345558211"
};



@NgModule({
  declarations: [
    AdminComponent,
    AccountComponent,
    MemberComponent,
    DashboardComponent,
    BannerComponent,
    BookComponent,
    BuyComponent,
    InboxComponent,
    ModuleComponent,
    SellComponent,
    SettingComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    adminRouting,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    
    
    
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
