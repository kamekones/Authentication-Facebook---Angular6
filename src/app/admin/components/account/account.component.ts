import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import { Account } from './account';

import swal from 'sweetalert2';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = new Account("", "", "", "");
  submitted = false;
  uid = localStorage.getItem('uid');
  accountList: AngularFireList<any>;
  keyWordEdit = "";
  email: any;
  fname: any;
  lname: any;
  tel: any;
  constructor(private db2: AngularFireDatabase,  private route: Router) {
    this.accountList = db2.list('users/' + this.uid + '/account');
  }



  ngOnInit() {
    this.getAccount();
  }

  edit(key) {
    this.keyWordEdit = key;
    
  }

  accountSubmit() {
    this.keyWordEdit = '';
    this.submitted = true;
    // console.log(this.account)
    const path = '/users/' + this.uid + '/account';
    const userRef: AngularFireObject<any> = this.db2.object(path);
    const data = {
      name: this.account.fname + " " + this.account.lname,
      fname: this.account.fname,
      lname: this.account.lname,
      email: this.account.email,
      tel: this.account.tel,
    }
    swal({
      position: 'center',
      type: 'success',
      title: 'Saved',
      showConfirmButton: false,
      timer: 1000,
    })
    userRef.update(data)
      .catch(error => console.log(error));
  }

  getAccount() {
    this.accountList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      // console.log(items);
      this.account["email"] = this.email = items[0].value;
      this.account["fname"] = this.fname = items[1].value;
      this.account["lname"] = this.lname = items[3].value;
      if (items[5].value) {
        this.account["tel"] = this.tel = items[5].value;
      } else {
        this.account["tel"] = this.tel = "";
      }
    });
  }





}
