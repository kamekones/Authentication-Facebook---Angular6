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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  loginForm: FormGroup;
  emailSignup: string;
  nameSignup: string;
  accessToken = localStorage.getItem('token');
  uid = localStorage.getItem('uid');
  userList: AngularFireList<any>;
  displayName: any;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private db2: AngularFireDatabase) {
    auth.getCurrentLoggedIn();
    this.userList = db2.list('users/' + this.uid);
  }

  ngOnInit() {
    this.buildForm();
    this.getUser();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      emailSignup: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordSignup: new FormControl('', [
        Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ])

    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ])
    });

  }

  signup() {
    this.auth.emailSignUp(this.userForm.value.emailSignup, this.userForm.value.passwordSignup)
  }

  login() {
    this.auth.emailLogin(this.loginForm.value.email, this.loginForm.value.password)
  }


  facebook(){
    this.auth.facebookLogin();
  }


  getUser() {
    this.userList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.displayName = items[1].value;
      // this.getUser();
    });
  }



}
