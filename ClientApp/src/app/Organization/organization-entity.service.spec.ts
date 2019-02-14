import { TestBed, inject } from '@angular/core/testing';

import { OrganizationEntityService } from './organization-entity.service';

describe('OrganizationEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationEntityService]
    });
  });
  it('should be created', inject([OrganizationEntityService], (service: OrganizationEntityService) => {
    expect(service).toBeTruthy();
  }));
});
