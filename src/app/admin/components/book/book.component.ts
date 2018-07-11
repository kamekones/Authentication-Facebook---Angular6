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
  book = new Book("", null, null, null, "", "", "", {});
  submitted = false;
  valueEducation = "";
  valueFaculty = "";
  valueBranch = "";
  url: any;
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: { percentage: number } = { percentage: 0 }
  countTransport = 0;

  constructor(private bookService: BookFileService, private db: AngularFireDatabase, private route: Router) {

  }

  ngOnInit() {

  }

  Education(value) {
    this.valueEducation = value;
    this.valueFaculty = '';
    this.book['category'] = {
      'education': value

    }
  }

  Faculty(value) {
    this.valueFaculty = value;
    this.book['category'] = {
      'education': this.valueEducation,
      'faculty': value

    }
  }

  Branch(value) {
    this.valueBranch = value;
    this.book['category'] = {
      'education': this.valueEducation,
      'faculty': this.valueFaculty,
      'branch': value

    }
  }



  selectFile(event) {
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }



  addBookSubmit() {
    this.submitted = true;
    console.log(this.book);
    if (this.selectedFiles == undefined) {
      swal({
        position: 'center',
        type: 'error',
        title: 'กรุณาอัพโหลดรูปภาพ',
        showConfirmButton: false,
        timer: 1000,
      })
    } else {
      this.upload()
    }

  }

  upload() {
    const file = this.selectedFiles.item(0)
    this.currentFileUpload = new FileUpload(file);
    this.pushFileToStorage(this.currentFileUpload, this.progress)
  }


  pushFileToStorage(fileUpload, progress: { percentage: number }) {
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
        this.book['inStock'] = true
        this.saveFileData(this.book)


      }
    );
  }

  private saveFileData(fileUpload) {
    this.db.list(`books/`).push(fileUpload).then(() => {
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
