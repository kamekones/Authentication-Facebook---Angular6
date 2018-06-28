import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './providers/auth.service';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import { MemberSignup } from './member.signup';
import { MemberLogin } from './member.login';

import swal from 'sweetalert2';
import {
  NG_VALIDATORS, Validator,
  AbstractControl, ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  memberSignup = new MemberSignup("", "", "", "");
  memberLogin = new MemberLogin("", "");
  submitted = false;
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  userList: AngularFireList<any>;
  displayName: any;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private db2: AngularFireDatabase) {
    auth.getCurrentLoggedIn();
    this.userList = db2.list('users/' + this.uid);
  }

  ngOnInit() {
    this.getUser();
  }



  signup() {
    this.submitted = true;
    console.log(this.memberSignup)
    localStorage.setItem('username', this.memberSignup['username'])
    this.auth.emailSignUp(this.memberSignup['email'], this.memberSignup['password'])
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
              title: 'เข้าสู่ระบบสำเร็จ',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      })

  }

  login() {
    this.submitted = true;
    this.auth.emailLogin(this.memberLogin['email'], this.memberLogin['password'])
      .then(res => {
        console.log(res)
        if (res && res.code == 'auth/user-not-found') {
          swal({
            type: 'error',
            title: 'Oops!!',
            text: 'อีเมลไม่ถูดต้อง!',
          })
        }else if(res && res.code == 'auth/wrong-password'){
          swal({
            type: 'error',
            title: 'Oops!!',
            text: 'รหัสผ่านไม่ถูกต้อง!',
          })
        }else if(res == undefined){
          swal({
            position: 'center',
            type: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }


  facebook() {
    this.auth.facebookLogin().then(res=>{
      if(res == undefined){
        swal({
          position: 'center',
          type: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  getUser() {
    this.userList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.displayName = items[1].value;


    });
  }



}
