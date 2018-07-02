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
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  memberSignup = new MemberSignup("", "", "", "", "");
  memberLogin = new MemberLogin("", "");
  submitted = false;
  isAdmin: any;
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  userList: AngularFireList<any>;
  displayName: any;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private db2: AngularFireDatabase) {
    auth.getCurrentLoggedIn();
    this.userList = db2.list('users/' + this.uid + '/account');
  }

  ngOnInit() {
    this.getUser();
  }



  signup() {
    this.submitted = true;
    console.log(this.memberSignup)
    localStorage.setItem('fname', this.memberSignup['fname']);
    localStorage.setItem('lname', this.memberSignup['lname']);
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
        if (res && res.code == 'auth/user-not-found' || res.code == "auth/invalid-email") {
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
            timer: 2000
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
      this.isAdmin = items[2].value;
      localStorage.setItem('isAdmin', items[2].value);
      this.displayName = items[1].value;
    });
  }


  async resetPassword() {
    const {value: email} = await swal({
      title: 'โปรดใส่ Email ของคุณ',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      swal('ตรวจสอบ Email ของคุณ')
      this.auth.resetPassword(email).then(res => {
        console.log(res);
      })
    }
  }





}
