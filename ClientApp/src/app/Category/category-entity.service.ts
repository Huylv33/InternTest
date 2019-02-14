import { Injectable } from '@angular/core';
import { CategoryEntity } from './category-entity';

@Injectable({
  providedIn: 'root'
})
export class CategoryEntityService {
  CategoryEntities: CategoryEntity[];
  constructor() {
    var categoryList = [
      {
        Id: "5a990522-56b4-4b1f-82a6-568685cd6f73",
        Name: "Đồ diện tử dùng trong văn phòng khác (key, mouse, dây cáp mạng…)",
        Description: null,
        ExpertId: null,
        ExpertEntity: null,
        DateTime: null,
        ParentCategoryId: "9c59fce0-7627-472c-bd37-f4689646fb84",
        Level: 0,
        ParentCategoryEntities: null,
        MasterContractEntities: null,
        CategoryOrganizationEntity: null
      },
      {
        Id: "e5e02d0a-c825-46d1-92e4-4ae4abe5c596",
        Name: "Máy scan",
        Description: null,
        ExpertId: null,
        ExpertEntity: null,
        DateTime: null,
        ParentCategoryId: "9c59fce0-7627-472c-bd37-f4689646fb84",
        Level: 0,
        ParentCategoryEntities: null,
        MasterContractEntities: null,
        CategoryOrganizationEntity: null
      },
      {
        Id: "57443432-4004-47c1-9ec6-aab5bcc3757f",
        Name: "Máy photocopy",
        Description: null,
        ExpertId: null,
        ExpertEntity: null,
        DateTime: null,
        ParentCategoryId: "9c59fce0-7627-472c-bd37-f4689646fb84",
        Level: 0,
        ParentCategoryEntities: null,
        MasterContractEntities: null,
        CategoryOrganizationEntity: null
      },
      {
        Id: "f7a27eae-3474-44f3-a677-6700b4c71f8f",
        Name: "Thiết bị âm thanh",
        Description: null,
        ExpertId: null,
        ExpertEntity: null,
        DateTime: null,
        ParentCategoryId: "9c59fce0-7627-472c-bd37-f4689646fb84",
        Level: 0,
        ParentCategoryEntities: null,
        MasterContractEntities: null,
        CategoryOrganizationEntity: null
      },
      
    ]
    this.CategoryEntities = [
      new CategoryEntity(categoryList[0]),
      new CategoryEntity(categoryList[1]),
      new CategoryEntity(categoryList[2]),
      new CategoryEntity(categoryList[3])
    ]
  }
}
