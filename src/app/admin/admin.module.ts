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
import { MemberComponent } from './members/member.component';

    
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
    MemberComponent

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
