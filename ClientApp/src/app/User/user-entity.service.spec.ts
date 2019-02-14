import { TestBed, inject } from '@angular/core/testing';

import { UserEntityService } from './user-entity.service';

describe('UserEntityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEntityService]
    });
  });

  it('should be created', inject([UserEntityService], (service: UserEntityService) => {
    expect(service).toBeTruthy();
  }));
});
