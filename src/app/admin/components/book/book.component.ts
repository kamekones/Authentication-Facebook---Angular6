import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

import { Book } from './book';
import { BookFileService } from '../../services/book.service';
import { FileUpload } from '../../FileUpload/fileupload';

import swal from 'sweetalert2';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book = new Book("", null, null, null, "", "");
  submitted = false;
  valueCategory = "";
  transport = [];
  category = [];
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  formData;
  formDataCover;
  countTransport = 0;
  constructor(private bookService: BookFileService, private db: AngularFireDatabase, private route: Router) {

  }

  ngOnInit() {

  }

  categoty(key) {
    this.valueCategory = key;
  }

  selectTransport(value) {
    this.transport.push(value);
    this.book['transport'] = this.transport
    console.log(this.transport);

  }

  selectCategory(value) {
    this.category.push(value);
    this.book['category'] = this.category
    console.log(this.category)

  }


  selectFile(event) {
    this.selectedFiles = event.target.files; 
  }


  addBookSubmit() {
    this.submitted = true;
    this.book['inStock'] = true;
    this.upload()
  }

  upload() {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.pushFileToStorage(this.currentFileUpload, this.progress)
  }


  pushFileToStorage(fileUpload, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`book/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL
        fileUpload.name = fileUpload.file.name
        this.book['name'] = fileUpload.name
        this.book['url'] = fileUpload.url
        this.saveFileData(this.book)
      }
    );
  }

  private saveFileData(fileUpload) {
    this.db.list(`books/`).push(fileUpload).then(()=>{
      swal({
        position: 'center',
        type: 'success',
        title: 'Saved',
        showConfirmButton: false,
        timer: 1000,
      })
      this.route.navigate(['admin/list'])
    })  
  }

  






}
