import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../users/providers/auth.service';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  userList: AngularFireList<any>;
  displayName: any;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private db2: AngularFireDatabase) {
    this.userList = db2.list('users/' + this.uid + '/account');
  }

  ngOnInit() {
    this.getUserAdmin();
  }

  getUserAdmin() {
    this.userList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.displayName = items[4].value;
      localStorage.setItem('fullname', this.displayName);
    });
  }






}
