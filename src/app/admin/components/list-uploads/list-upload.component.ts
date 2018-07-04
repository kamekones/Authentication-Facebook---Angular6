import { Component, OnInit } from '@angular/core';

import { UploadFileService } from '../../services/upload.service';
import { FileUpload } from '../../FileUpload/fileupload';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: any[];
  p: number = 1;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.uploadService.getFileUploads().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}