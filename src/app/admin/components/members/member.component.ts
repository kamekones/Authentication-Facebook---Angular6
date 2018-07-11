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
import { EditMemberAdmin } from './edit-member';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  admin = new MemberAdmin("", "", "", "", "", "");
  editAdmin = new EditMemberAdmin("", "", "");
  submitted = false;
  adminList: any;
  idOther: any;
  modal:any;
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  adminData: AngularFireList<any>;
  countUser: any;
  p=1;
  constructor(private api: ApiService, private router: Router, private fb: FormBuilder, private db2: AngularFireDatabase) {
    // api.getCurrentLoggedIn();
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
    this.adminList = [];
    this.adminData.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      var x = 0;
      for(let i in items){
        if(items[i].value.account.isAdmin === true && items[i].value.account.name != localStorage.getItem('fullname')){
          this.adminList[x] = items[i];
          x++;
        }
      }
      this.countUser = this.adminList.length      
    });
  }

  async removeAdmin(id) {
    this.adminData.remove(id).then(() => {
       swal({
        position: 'center',
        type: 'success',
        title: 'Deleted',
        showConfirmButton: false,
        timer: 1000,
      })
      this.getAdmin();

    })
  }

  getEditAdmin(id){
    localStorage.setItem('idOther', id);
    this.db2.list('users/'+id).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.editAdmin["email"] = items[0].value.email;
      this.editAdmin["fname"] = items[0].value.fname;
      this.editAdmin["lname"] = items[0].value.lname;
      
    });
    
  }

  submitEditAdmin(){
    this.idOther = localStorage.getItem('idOther');
    this.submitted = true;
    console.log(this.editAdmin);
    const path = '/users/' + this.idOther + '/account'; 
    const userRef: AngularFireObject<any> = this.db2.object(path);
    const data = {
      name: this.editAdmin.fname + " " + this.editAdmin.lname,
      fname: this.editAdmin.fname,
      lname: this.editAdmin.lname,
      email: this.editAdmin.email,
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

}
