import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import swal from 'sweetalert2';
@Injectable()
export class ApiService {
  authState: any = null;
  dataUser: any = null;
  memberUser: any = null;
  checkLogin: any = [];
  userRef: AngularFireObject<any>;
  userEmail: AngularFireObject<any>;
  tel: any;
  userList: AngularFireList<any>;
  uid = localStorage.getItem('uid');
  private user: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.userList = db.list('users/' + this.uid + '/account');
    this.user = afAuth.authState;
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  get currentUserObservable(): any {
    return this.afAuth.authState
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest'
    } else if (this.currentUserAnonymous) {
      return 'Anonymous'
    } else {
      return this.authState['displayName'] || 'User without a Name'
    }
  }



  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user
        // this.router.navigate([''])
      })
      .catch(error => console.log(error));
  }
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user
      this.authState['fname'] = localStorage.getItem('fname');
      this.authState['lname'] = localStorage.getItem('lname');
      this.authState['name'] = localStorage.getItem('fname')+" "+localStorage.getItem('lname');;
      this.authState['tel'] = "";
      this.addUserEmail()
    })
    .catch(error => { return error });
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error))
  }
  getCurrentLoggedIn() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        // this.router.navigate([''])
      }
    });
  }

  signOut(): void {
    localStorage.clear();
    this.afAuth.auth.signOut();
    swal({
      position: 'center',
      type: 'success',
      title: 'ออกจากระบบ',
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload();
  }
 

  private addUserEmail(): void {
    const path = `users/${this.currentUserId}/account`; // Endpoint on firebase
    const userEmail: AngularFireObject<any> = this.db.object(path);
    const data = {
      email: this.authState.email,
      name: this.authState.name,
      isAdmin: true,
      fname: this.authState.fname,
      lname: this.authState.lname,
      tel: this.authState.tel
    }
    userEmail.update(data)
      .catch(error => console.log(error));
  }










}