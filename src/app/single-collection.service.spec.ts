import { TestBed, inject } from '@angular/core/testing';

import { SingleCollectionService } from './single-collection.service';

describe('SingleCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleCollectionService]
    });
  });

  it('should be created', inject([SingleCollectionService], (service: SingleCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
