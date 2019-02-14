import { TestBed, inject } from '@angular/core/testing';

import { RFQEntityService } from './rfqentity.service';

describe('RFQEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RFQEntityService]
    });
  });
  it('should be created', inject([RFQEntityService], (service: RFQEntityService) => {
    expect(service).toBeTruthy();
  }));
});
