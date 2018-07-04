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
import { AccountComponent } from './components/account/account.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookComponent } from './components/book/book.component';
import { ListComponent } from './components/book/list/list.component';
import { BuyComponent } from './components/buy/buy.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DashboardComponent } from './components/dashboards/dashboard.component';
import { MemberComponent } from './components/members/member.component';
import { ModuleComponent } from './components/module/module.component';
import { SellComponent } from './components/sell/sell.component';
import { SettingComponent } from './components/setting/setting.component';
import { TransportComponent } from './components/transport/transport.component';
import { DetailsUploadComponent } from './components/detail-uploads/detail-upload.component'
import { ListUploadComponent } from './components/list-uploads/list-upload.component'
import { FormUploadComponent  } from './components/form-uploads/form-upload.component'

import { UploadFileService } from './services/upload.service';
import { ApiService } from './services/api.service';
import {BookFileService } from './services/book.service';

import { EqualValidator } from './password.match.directive';
import {NgxPaginationModule} from 'ngx-pagination';
    
// export const firebaseConfig = {
//   apiKey: "AIzaSyCvxxjDMjIG5RfYXHv0V1HjfhWVfaGqcjM",
//   authDomain: "mebooks-5de3f.firebaseapp.com",
//   databaseURL: "https://mebooks-5de3f.firebaseio.com",
//   projectId: "mebooks-5de3f",
//   storageBucket: "mebooks-5de3f.appspot.com",
//   messagingSenderId: "411345558211"
// };



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
    TransportComponent,
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListComponent,
    EqualValidator
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    adminRouting,
    NgxPaginationModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    
    
    
  ],
  providers: [
    AngularFireDatabase,
    UploadFileService,
    ApiService,
    BookFileService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
