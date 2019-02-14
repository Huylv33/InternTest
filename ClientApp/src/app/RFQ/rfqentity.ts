import { OrganizationEntity } from "../Organization/organization-entity";
import { OrganizationUnitEntity } from "../OrganizationUnit/organization-unit-entity";
import { RFQDetailEntity } from "../RFQDetail/rfqdetail-entity";
import { UserEntity } from "../User/user-entity";
import { FileEntity } from "../FileUpload/file-entity";
import { RFQMailCCEntity } from "../RFQMailCC/rfqmail-ccentity";

export class RFQEntity {
  Id: string ;
  UserId: string;
  Number: number;
  Description: string;
  ReceivedAddress: string;
  CreatedDate: string;
  HandlerId: string;
  SubRootCategoryId: string;
  OrganizationId: string;
  OrganizationUnitId: string;
  OrganizationEntity: OrganizationEntity;
  OrganizationUnitEntity: OrganizationUnitEntity;
  RFQDetailEntities: RFQDetailEntity[];
  UserEntity: UserEntity;
  HandlerEntity: UserEntity;
  Note: any;
  Level: number;
  Status: string;
  Comment: any;
  Field: any;
  FileEntity: FileEntity;
  QuotationByVendorEntities: any;
  PerchaseRequestEntities: any;
  RFQMailCCEntities: RFQMailCCEntity[];
  constructor(RFQEntity : any = null) {
     if (RFQEntity != null) {
       this.Id = RFQEntity.Id;
       this.Number = RFQEntity.Number;
       this.Description = RFQEntity.Description;
       this.ReceivedAddress = RFQEntity.ReceivedAddress;
       this.OrganizationUnitId = RFQEntity.OrganizationUnitId;
       this.OrganizationId = RFQEntity.OrganizationId;
       this.UserId = RFQEntity.UserId;
       this.HandlerId = RFQEntity.HandlerId;
       this.CreatedDate = RFQEntity.CreatedDate;
       this.Note = RFQEntity.Note;
       this.Level = RFQEntity.Level;
       this.Status = RFQEntity.Status;
       this.UserEntity = RFQEntity.UserEntity;
       this.RFQDetailEntities = RFQEntity.RFQDetailEntities;
       this.OrganizationEntity = new OrganizationEntity(RFQEntity.OrganizationEntity);
       this.OrganizationUnitEntity = new OrganizationUnitEntity(RFQEntity.OrganizationUnitEntity);
       this.HandlerEntity = new UserEntity(RFQEntity.HandlerEntity);
       this.QuotationByVendorEntities = RFQEntity.QuotationByVendorEntities;
       this.PerchaseRequestEntities = RFQEntity.PerchaseRequestEntities;
       this.RFQMailCCEntities = RFQEntity.RFQMailCCEntities;
     }
     else {
       this.Id = null;
       this.Number = null;
       this.Description = null;
       this.ReceivedAddress = null;
       this.OrganizationId = null;
       this.OrganizationUnitId = null;
       this.UserId = null;
       this.HandlerId = null;
       this.CreatedDate = null;
       this.Note = null;
       this.Level = null;
       this.Status = null;
       this.UserEntity = new UserEntity();
       this.OrganizationEntity = new OrganizationEntity();
       this.OrganizationUnitEntity = new OrganizationUnitEntity();
       this.HandlerEntity = new UserEntity();
       this.RFQDetailEntities = [];
       this.QuotationByVendorEntities = null;
       this.PerchaseRequestEntities = null;
       this.RFQMailCCEntities = null;
     }
  }
}
