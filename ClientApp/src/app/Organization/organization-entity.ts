import { OrganizationUnitEntity } from '../OrganizationUnit/organization-unit-entity';
export class OrganizationEntity { 
  Id: string;
  Code: string;
  Name: string;
  TaxCode: string; 
  ParentId: string;
  Version: number;
  isDeleted: boolean;
  OrganizationUnitEntities: OrganizationUnitEntity[];
  ADGroupEntities: any;
  constructor(OrganizationEntity: any = null) {
    if (OrganizationEntity != null) {
      this.Id = OrganizationEntity.Id;
      this.Name = OrganizationEntity.Name;
      this.Code = OrganizationEntity.Code;
      this.TaxCode = OrganizationEntity.TaxCode;
      this.ParentId = OrganizationEntity.ParentId;
      this.ADGroupEntities = OrganizationEntity.ADGroupEntities;
      this.OrganizationUnitEntities = OrganizationEntity.OrganizationUnitEntities;
      this.Version = OrganizationEntity.Version;
      this.isDeleted = OrganizationEntity.isDeleted;
    }
    else {
      this.Id = null;
      this.Name = null;
      this.Code = null;
      this.TaxCode = null;
      this.ParentId = null;
      this.ADGroupEntities = null;
      this.OrganizationUnitEntities = null;
      this.Version = null;
      this.isDeleted = null;
    }
  } 
}
