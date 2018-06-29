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
import { Banks } from './bank';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';

import swal from 'sweetalert2';

export class Item {
  body: string;
}


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uid = localStorage.getItem('uid');
  model = new User("", "", "", "");
  banks = new Banks("", "", "", "", "");
  address = new Address("", "", "", "", "", "", "");
  submitted = false;
  userList: AngularFireList<any>;
  addressList: AngularFireList<any>;
  banksList: AngularFireList<any>;
  // count = 0;
  // countBank = 0;
  countAdress: any;
  countBanks: any;
  increse: any;
  plus: any;
  items: FirebaseListObservable<Item[]> = null;
  idAdress: any;
  addressUsers: any;
  banksUsers: any;


  constructor(private db2: AngularFireDatabase, private dService: DataService) {
    this.userList = db2.list('users/' + this.uid + '/account');
    this.addressList = db2.list(`users/${this.uid}/address`);
    this.banksList = db2.list(`users/${this.uid}/banks`);
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
      this.model["lname"] = items[3].value;
      if (items[5].value) {
        this.model["tel"] = items[5].value;
      } else {
        this.model["tel"] = "";
      }
    });
  }


  addressUser() {
    if (this.address['name'] == "" || this.address["address"] == "" || this.address["sub_district"] == "" || this.address["district"] == ""
      || this.address['province'] == "" || this.address['postcode'] == "" || this.address['tel'] == "") {
      swal({
        type: 'error',
        title: 'Oops!!',
        text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
      })
    } else {
      this.db2.list(`users/${this.uid}/address`).push(this.address);
      swal({
        position: 'center',
        type: 'success',
        title: 'Saved',
        showConfirmButton: false,
        timer: 1000,
      })
      this.increse = localStorage.removeItem('add');
    }
  }

  async getAddress() {
    this.addressUsers = [];
    this.addressList.snapshotChanges().map((actions) => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe((items) => {
      for (let i in items) {
        // localStorage.setItem('AdressId', items[i].key);
        this.addressUsers[i] = items[i];
      }
      this.countAdress = this.addressUsers.length
    });


  }


  removeAddress(id) {
    this.db2.list(`users/${this.uid}/address`).remove(id).then(() => {
      swal({
        position: 'center',
        type: 'success',
        title: 'Deleted',
        showConfirmButton: false,
        timer: 1000,
      })
      this.getAddress();
    })
  }

  saveBank() {
    if (this.banks['bank'] == "" || this.banks["numberbank"] == "" || this.banks["account"] == "" || this.banks["branch"] == ""
      || this.address['province'] == "") {
      swal({
        type: 'error',
        title: 'Oops!!',
        text: 'โปรดกรอกข้อมูลให้ครบถ้วน!',
      })
    } else {
      this.db2.list(`users/${this.uid}/banks`).push(this.banks);
      swal({
        position: 'center',
        type: 'success',
        title: 'Saved',
        showConfirmButton: false,
        timer: 1000,
      })
      this.plus = localStorage.removeItem('bank');
    }
  }

  async getBanks(){
    this.banksUsers = [];
    this.banksList.snapshotChanges().map((actions) => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe((items) => {
      for (let i in items) {
        // localStorage.setItem('AdressId', items[i].key);
        this.banksUsers[i] = items[i];
      }
      this.countBanks = this.banksUsers.length
    });
  }

  removeBank(id){
    this.db2.list(`users/${this.uid}/banks`).remove(id).then(() => {
      swal({
        position: 'center',
        type: 'success',
        title: 'Deleted',
        showConfirmButton: false,
        timer: 1000,
      })
      this.getBanks();
    })
  }



  ngOnInit() {
    this.getUser();
    this.getAddress();
    this.getBanks();

  }


  increaseAdd(add) {
    localStorage.setItem('add', add);
    // if (this.count != 2) {
    this.increse = localStorage.getItem('add');
    // } else {
    //   alert("สามารถบันทึกที่อยู่ได้เพียง 2 ที่อยู่")
    // }
  }

  plusBank(bank) {
    localStorage.setItem('bank', bank);
    // if (this.countBank != 3) {
    this.plus = localStorage.getItem('bank');
    // } else {
    //   alert("สามารถบันทึกบัญชีธนาคารได้เพียง 3 บัญชี")
    // }
  }

  cancalAdd() {
    this.increse = localStorage.removeItem('add');
  }
  cancalBank() {
    this.plus = localStorage.removeItem('bank');
  }








}
