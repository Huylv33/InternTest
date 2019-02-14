import { Injectable } from '@angular/core';
import { OrganizationEntity } from './organization-entity';

@Injectable({
  providedIn: 'root'
})
export class OrganizationEntityService {
  OrganizationEntities: OrganizationEntity[];
  constructor() { 
    let OrganizationList = [
      `{
        "Id": "3987e29e-14f9-4712-a6cb-b7f8a02dea2d",
        "Code": "FHO-HN",
        "Name": "FHO Hà Nội",
        "ParentId": "2d1bcd6d-921d-4e9b-afaa-98af2f7ccc34",
        "TaxCode": "0101248141",
        "Version": 0,
        "IsDeleted": false,
        "OrganizationUnitEntities": null,
        "ADGroupEntities": null
      }`,
      `{
        "Id": "3987e29e-14f9-4712-a6cb-e",
        "Code": "FHO-HCM",
        "Name": "FHO Hồ Chí Minh",
        "ParentId": "2d1bcd6d-921d-4e9b-afaa-98af2f7ccc34",
        "TaxCode": "0101248142",
        "Version": 0,
        "IsDeleted": false,
        "OrganizationUnitEntities": null,
        "ADGroupEntities": null
      }`
    ];
    this.OrganizationEntities = [
      new OrganizationEntity(JSON.parse(OrganizationList[0])),
      new OrganizationEntity(JSON.parse(OrganizationList[1])),
    ]
  }
}
