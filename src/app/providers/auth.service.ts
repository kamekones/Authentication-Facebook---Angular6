import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthService {
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
    this.userList = db.list('users/' + this.uid);
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

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }
  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }


  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
        localStorage.setItem('token', res.credential.accessToken);
        localStorage.setItem('uid', res.user.uid);
        this.authState = res.user
        this.dataUser = res.additionalUserInfo         
        if(this.dataUser.isNewUser == true){
          this.dataUser.profile['tel'] = "";
          console.log(this.dataUser)
          this.updateUserData();
        }
        this.getUser();
        location.reload();

      })
      .catch(error => console.log(error));
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
    // console.log(email);
    // console.log(localStorage.getItem('username'))
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        localStorage.setItem('token', this.authState.refreshToken);
        localStorage.setItem('uid', this.authState.uid);
        this.authState['username'] = localStorage.getItem('username');
        this.authState['name'] = "";
        this.authState['lname'] = "";
        this.authState['tel'] = "";
        // console.log(this.authState) 
        this.addUserEmail()
        window.location.reload();
        this.router.navigate(['']);

      })
      .catch(error => { return error });
  }
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem('token', this.authState.refreshToken);
        localStorage.setItem('uid', this.authState.uid);
        console.log(this.authState);
        window.location.reload();
        this.router.navigate(['']);
        
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
    window.location.reload();
  }
  private updateUserData(): void {
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const userRef: AngularFireObject<any> = this.db.object(path);
    const data = {
      email: this.dataUser.profile.email,
      name: this.dataUser.profile.name,
      fname: this.dataUser.profile.first_name,
      lname: this.dataUser.profile.last_name,
      tel: this.dataUser.profile.tel



    }
    userRef.update(data)
      .catch(error => console.log(error));
  }

  private addUserEmail(): void {
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const userEmail: AngularFireObject<any> = this.db.object(path);
    const data = {
      email: this.authState.email,
      name: this.authState.name,
      fname: this.authState.username,
      lname: this.authState.lname,
      tel: this.authState.tel
    }
    userEmail.update(data)
      .catch(error => console.log(error));
  }

  private LoginUser(): void {
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const userEmail: AngularFireObject<any> = this.db.object(path);
    const data = {
      email: this.authState.email,
    }
    userEmail.update(data)
      .catch(error => console.log(error));
  }


  getUser() {
    this.userList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.tel = items[4].value;
      if(this.tel == undefined){
        this.updateUserData()
        window.location.reload();
      }
      
    });
  }

  



}