export class FileEntity {
  Name: string;
  Extension: string;
  Files: FileList[];
  constructor (FileEntity: any = null) {
    if (FileEntity == null) {
      this.Name = null;
      this.Extension = null;
    }
  } 
}
