import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from '../../services/upload.service';
import { FileUpload } from '../../FileUpload/fileupload';

@Component({
  selector: 'details-upload',
  templateUrl: './detail-upload.component.html',
  styleUrls: ['./detail-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}