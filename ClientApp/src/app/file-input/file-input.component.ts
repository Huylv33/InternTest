import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileEntity } from './file-entity';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})

export class FileInputComponent implements OnInit {
  Id: string;
  @Input('fileId') fileId: string = this.Id;
  @Input() FileEntity: FileEntity;
  constructor() {
    this.Id = this.generateRandomId();
  }
  generateRandomId(): string {
    let sample = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
    let id = "";
    for (let i = 0; i < 8; i++){ 
      id += sample.charAt(Math.floor((Math.random()) * sample.length));
    }
    return id;
  }
  
  loadFile(e: any) {
    let fileInput  = e.target.files[0];
    this.FileEntity.Length = fileInput.size;
    console.log(this.FileEntity.Length);
    this.FileEntity.Name = fileInput.name;
    console.log(fileInput.name);
    let arr = fileInput.name.split('.');
    this.FileEntity.Extension = arr[arr.length - 1];
  }

  ngOnInit() {
  }

}
