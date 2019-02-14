import { TestBed, inject } from '@angular/core/testing';

import { CategoryEntityService } from './category-entity.service';

describe('CategoryEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryEntityService]
    });
  });

  it('should be created', inject([CategoryEntityService], (service: CategoryEntityService) => {
    expect(service).toBeTruthy();
  }));
});

