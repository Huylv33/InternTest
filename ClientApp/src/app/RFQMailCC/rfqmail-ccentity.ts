
export class RFQMailCCEntity {
  Id: string;
  Display: string;
  Name: string;
  ADGroupEntities: any;
  RoleEntities: any;
  Token: any;
  Version: Number;
  IsDeleted: boolean;
  constructor(RFQMailCCEntity?: any) {
    if (RFQMailCCEntity != null)
      this.Id = RFQMailCCEntity.Id;
      this.Display = RFQMailCCEntity.Display;
      this.Name = RFQMailCCEntity.Name;
      this.ADGroupEntities = RFQMailCCEntity.ADGroupEntities;
      this.RoleEntities = RFQMailCCEntity.RoleEntities;
      this.Token = RFQMailCCEntity.Token;
      this.Version = RFQMailCCEntity.Version;
      this.IsDeleted = RFQMailCCEntity.IsDeleted;
  }
  // constructor() {
  //   this.Id = RFQMailCCEntity."7a966707-bc7a-4d7f-80a2-000dc090613a";
  //   this.Display = RFQMailCCEntity."dungnt150@fpt.com.vn";
  //   this.Name = RFQMailCCEntity."dungnt150@fpt.com.vn";
  //   this.ADGroupEntities = RFQMailCCEntity.null;
  //   this.RoleEntities = RFQMailCCEntity.null,
  //   this.Token = RFQMailCCEntity.null,
  //   this.Version = RFQMailCCEntity.131628812641437652,
  //   this.IsDeleted = RFQMailCCEntity.false;
  // }
}
