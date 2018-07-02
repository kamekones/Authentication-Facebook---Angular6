import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../services/api.service';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import {
  NG_VALIDATORS, Validator,
  AbstractControl, ValidatorFn
} from '@angular/forms';

import swal from 'sweetalert2';

import { MemberAdmin } from './member';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  admin = new MemberAdmin("", "", "", "", "", "");
  submitted = false;
  adminList = [];
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  adminData: AngularFireList<any>;
  countUser: any;
  constructor(private api: ApiService, private router: Router, private fb: FormBuilder, private db2: AngularFireDatabase) {
    api.getCurrentLoggedIn();
    this.adminData = db2.list('users/');
  }

  ngOnInit() {
    this.getAdmin();
  }

  signup() {
    this.submitted = true;
    console.log(this.admin)
    localStorage.setItem('fname', this.admin['fname']);
    localStorage.setItem('lname', this.admin['lname']);
    this.api.emailSignUp(this.admin['email'], this.admin['password'])
      .then((res) => {
        console.log(res)
        if (res && res.code == 'auth/email-already-in-use') {
          swal({
            type: 'error',
            title: 'Oops!!',
            text: 'อีเมลนี้มีคนใช้แล้ว!',
          })
        }else{
          if(res == undefined){
            swal({
              position: 'center',
              type: 'success',
              title: 'บันทึกสำเร็จ',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      })
    

  }

  async getAdmin() {
    this.adminData.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      var x = 0;
      for(let i in items){
        if(items[i].value.account.isAdmin === true){
          this.adminList[x] = items[i];
          x++;
        }
      }
      this.countUser = this.adminList.length
      console.log(this.adminList)
      
    });
  }

  removeAdmin(id){
    this.db2.list(`users/`).remove(id).then(() => {
      this.getAdmin();
      swal({
        position: 'center',
        type: 'success',
        title: 'Deleted',
        showConfirmButton: false,
        timer: 1000,
      })
     
    })
  }

}
