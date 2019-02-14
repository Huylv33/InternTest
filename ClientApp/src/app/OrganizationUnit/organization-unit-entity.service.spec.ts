import { TestBed, inject } from '@angular/core/testing';

import { OrganizationUnitEntityService } from './organization-unit-entity.service';

describe('OrganizationUnitEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationUnitEntityService]
    });
  });

  it('should be created', inject([OrganizationUnitEntityService], (service: OrganizationUnitEntityService) => {
    expect(service).toBeTruthy();
  }));
});
