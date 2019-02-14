import { OrganizationEntity } from "../Organization/organization-entity";

export class OrganizationUnitEntity {
  Id: string;
  OrganizationId: string;
  Code: string;
  Name: string;
  OrganizationEntity: OrganizationEntity;
  Version: number;
  isDeleted: boolean;
  constructor(OrganizationUnitEntity : any = null) {
    if (OrganizationUnitEntity != null) {
      this.Id = OrganizationUnitEntity.Id;
      this.OrganizationId = OrganizationUnitEntity.OrganizationId;
      this.Code = OrganizationUnitEntity.Code;
      this.Name = OrganizationUnitEntity.Name;
      this.OrganizationEntity = OrganizationUnitEntity.OrganizationEntity;
      this.Version = OrganizationUnitEntity.Version;
      this.isDeleted = OrganizationUnitEntity.isDeleted;
    }
    else {
      this.Id = null;
      this.OrganizationId = null;
      this.Code = null;
      this.Name = null;
      this.OrganizationEntity = new OrganizationEntity();
      this.Version = null;  
      this.isDeleted = null;     
    }
  }
}
