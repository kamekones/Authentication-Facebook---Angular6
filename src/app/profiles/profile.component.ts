import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { DataService } from '../services/data.service';
import { User } from './user';
import { Address } from './address';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';

import swal from 'sweetalert2';




@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uid = localStorage.getItem('uid');
  model = new User("", "", "", "");
  address = new Address("", "", "", "", "", "", "");
  submitted = false;
  userList: AngularFireList<any>;
  count = 0;
  countBank = 0;
  increse: any;
  plus: any;


  constructor(private db2: AngularFireDatabase, private dService: DataService) {
    this.userList = db2.list('users/' + this.uid);
  }


  user() {
    this.submitted = true;
    if (!this.model["fname"] || !this.model["lname"] || !this.model["email"] || !this.model["tel"] || this.model["fname"] == "" || this.model["lname"] == "" ||
      this.model["email"] == "" || this.model["tel"] == "") {
      swal({
        type: 'error',
        title: 'Oops!!',
        text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
      })
    } else {
      this.dService.addUsers(this.model)
      swal({
        position: 'center',
        type: 'success',
        title: 'Saved',
        showConfirmButton: false,
        timer: 1000,
      })
    }

  }

  getUser() {
    this.userList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.model["email"] = items[0].value;
      this.model["fname"] = items[1].value;
      this.model["lname"] = items[2].value;
      if (items[4].value) {
        this.model["tel"] = items[4].value;
      } else {
        this.model["tel"] = "";
      }
    });
  }


  ngOnInit() {
    this.getUser();

  }


  increaseAdd(add) {
    localStorage.setItem('add', add);
    if (this.count != 2) {
      this.increse = localStorage.getItem('add');
    } else {
      alert("สามารถบันทึกที่อยู่ได้เพียง 2 ที่อยู่")
    }
  }

  plusBank(bank) {
    localStorage.setItem('bank', bank);
    if (this.countBank != 3) {
      this.plus = localStorage.getItem('bank');
    } else {
      alert("สามารถบันทึกบัญชีธนาคารได้เพียง 3 บัญชี")
    }
  }

  cancalAdd() {
    this.increse = localStorage.removeItem('add');
  }
  cancalBank() {
    this.plus = localStorage.removeItem('bank');
  }






}
