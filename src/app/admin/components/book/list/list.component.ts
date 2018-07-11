import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/Map';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Book } from '../book';
import { BookFileService } from '../../../services/book.service';
import swal from 'sweetalert2';
import { ApiService } from '../../../services/api.service';
import { FileUpload } from '../../../FileUpload/fileupload';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookUploads: any[];
  p=1;
  editbook = '';
  book = new Book("", null, null, null, "", "","", {});
  submitted = false;
  url: any;
  selectedFiles: FileList
  valueEducation = "";
  valueFaculty = "";
  valueBranch = "";
  currentFileUpload: FileUpload
  progress: { percentage: number } = { percentage: 0 }
  IdBook: string;
  categoryEducation: string;
  categoryFaculty: string;
  categoryBranch: string;
  constructor(private BookFileService: BookFileService, private db: AngularFireDatabase, private route: Router) {

  }

  ngOnInit() {
    this.BookFileService.getFileUploads().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(res => {
      this.bookUploads = res;
      // console.log(res)
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

  editBook(key, edit){
    this.editbook = edit;
    console.log(this.editbook);
    
    this.IdBook = key;
    
    this.db.list('books/' + key).snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      
      
      if(items[0].value.education){
        this.valueEducation = items[0].value.education
      }
      if(items[0].value.faculty){
        this.valueFaculty = items[0].value.faculty
      }
      if(items[0].value.branch){
        this.valueBranch = items[0].value.branch
      }
      this.book["condition"] = items[1].value
      this.book["detail"] = items[2].value
      this.book["inStock"] = items[3].value
      this.book["name"] = items[4].value
      this.book["namebook"] = items[5].value
      this.book["price1"] = items[6].value
      this.book["price2"] = items[7].value
      this.book["total"] = items[8].value
      this.book["transport"] = items[9].value
      this.book["url"] = items[10].value
      
    });

  }

  cancalBook(){
    this.editbook = '';
    this.route.navigate(['admin/list'])
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
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
        this.saveFileData(this.book)


      }
    );
  }

  private saveFileData(fileUpload) {
    const path = 'books/' + this.IdBook ;
    const userRef: AngularFireObject<any> = this.db.object(path);
    const data = {
      namebook: fileUpload.namebook,
      category: fileUpload.category,
      url: fileUpload.url,
      name: fileUpload.name,
      total: fileUpload.total,
      price1: fileUpload.price1,
      price2: fileUpload.price2,
      condition: fileUpload.condition,
      detail: fileUpload.detail,
      transport: fileUpload.transport,
      inStock: true
    }
    swal({
      position: 'center',
      type: 'success',
      title: 'Saved',
      showConfirmButton: false,
      timer: 1000,
    })
    this.editbook = '';
    userRef.update(data)
      .catch(error => console.log(error));
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

  private saveFileEdit() {
    const path = 'books/' + this.IdBook ;
    const userRef: AngularFireObject<any> = this.db.object(path);
    const data = {
      namebook: this.book.namebook,
      category: this.book.category,
      total: this.book.total,
      price1: this.book.price1,
      price2: this.book.price2,
      condition: this.book.condition,
      detail: this.book.detail,
      transport: this.book.transport,
      inStock: true
    }
    swal({
      position: 'center',
      type: 'success',
      title: 'Saved',
      showConfirmButton: false,
      timer: 1000,
    })
    this.editbook = '';
    userRef.update(data)
      .catch(error => console.log(error));
  }
  
  editSave(){
    if(this.selectedFiles != undefined){
      this.upload();
    }else{
      this.saveFileEdit()
    }  
    this.submitted = true;  
  }




}
