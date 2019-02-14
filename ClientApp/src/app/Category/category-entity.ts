export class CategoryEntity {
  Id: string;
  Name: string;
  Description: string;
  ExpertId: string;
  ExpertEntity: any;
  DateTime: string;
  ParentCategoryId: string;
  Level: number;
  ParentCategoryEntities: CategoryEntity[];
  MasterContractEntities: any;
  CategoryOrganizationEntity: any;
  constructor(categoryEntity: any = null) {
    if (categoryEntity != null) {
      this.Id = categoryEntity.Id;
      this.Name = categoryEntity.Name;
      this.Description = categoryEntity.Description;
      this.ExpertId = categoryEntity.ExpertId;
      this.ExpertEntity = categoryEntity.ExpertEntity;
      this.DateTime = categoryEntity.DateTime;
      this.ParentCategoryId = categoryEntity.ParentCategoryId;
      this.Level = categoryEntity.Level;
      this.ParentCategoryEntities = categoryEntity.ParentCategoryEntities;
      this.MasterContractEntities = categoryEntity.MasterContractEntities
      this.CategoryOrganizationEntity = categoryEntity.CategoryOrganizationEntity;
    }
  }
}

