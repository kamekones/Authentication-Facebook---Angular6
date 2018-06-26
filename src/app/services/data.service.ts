import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';


import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';






@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: Observable<any[]>;
  address: Observable<any[]>;
  uid = localStorage.getItem('uid');


  constructor(private db2: AngularFireDatabase, private http: Http) {

  }



  addUsers(value) {
    const path = '/users/' + this.uid; // Endpoint on firebase
    const userRef: AngularFireObject<any> = this.db2.object(path);
    const data = {
      name: value.fname + " " + value.lname,
      fname: value.fname,
      lname: value.lname,
      email: value.email,
      tel: value.tel
    }
    userRef.update(data)
      .catch(error => console.log(error));

  }

  

}
