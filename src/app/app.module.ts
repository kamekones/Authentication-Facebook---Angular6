import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing, appRoutingProviders } from './app.routing';


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profiles/profile.component';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';


import { DataService } from './services/data.service';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { EqualValidator } from './password.match.directive';

    
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
    AppComponent,
    AdminComponent,
    HomeComponent,
    ProfileComponent,
    BannerComponent,
    CartComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    
    
    
    
  ],
  providers: [
    DataService,
    AuthService, 
    AuthGuard, 
    AngularFireDatabase,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
