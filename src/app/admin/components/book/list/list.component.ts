import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import { BookFileService } from '../../../services/book.service';
import swal from 'sweetalert2';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookUploads: any[];
  p=1;
  constructor(private BookFileService: BookFileService, private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.BookFileService.getFileUploads().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(res => {
      this.bookUploads = res;
      console.log(res)
    });

  }

  deleteBook(book){
    this.db.list('books/').remove(book);
    swal({
      position: 'center',
      type: 'success',
      title: 'Deleted',
      showConfirmButton: false,
      timer: 1000,
    })
  }





}
