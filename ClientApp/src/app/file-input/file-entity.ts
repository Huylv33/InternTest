export class FileEntity {
  Name: string;
  Data: string;
  Extension: string;
  Length: number;
  constructor(FileEntity?: any) {
    if (FileEntity == null) {
      this.Name = null;
      this.Data = null;
      this.Extension = null;
      this.Length = null;
    } else {
      this.Name = FileEntity.Name;
      this.Data = FileEntity.Data;
      this.Extension = FileEntity.Extension;
      this.Length = FileEntity.Length;
    }
  }

}
