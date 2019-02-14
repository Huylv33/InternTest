import { TestBed, inject } from '@angular/core/testing';

import { VendorEntityService } from './vendor-entity.service';

describe('VendorEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorEntityService]
    });
  });

  it('should be created', inject([VendorEntityService], (service: VendorEntityService) => {
    expect(service).toBeTruthy();
  }));
});
