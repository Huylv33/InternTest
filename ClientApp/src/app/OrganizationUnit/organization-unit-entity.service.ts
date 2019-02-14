import { Injectable } from '@angular/core';
import { OrganizationEntity } from '../Organization/organization-entity';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitEntityService {
  OrganizationUnitEntities: OrganizationEntity[];
  constructor() {
    
  }
}
