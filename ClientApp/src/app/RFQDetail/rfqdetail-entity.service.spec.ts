import { TestBed, inject } from '@angular/core/testing';

import { RFQDetailEntityService } from './rfqdetail-entity.service';

describe('RFQDetailEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RFQDetailEntityService]
    });
  });

  it('should be created', inject([RFQDetailEntityService], (service: RFQDetailEntityService) => {
    expect(service).toBeTruthy();
  }));
});
