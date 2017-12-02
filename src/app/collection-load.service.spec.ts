import { TestBed, inject } from '@angular/core/testing';

import { CollectionLoadService } from './collection-load.service';

describe('CollectionLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionLoadService]
    });
  });

  it('should be created', inject([CollectionLoadService], (service: CollectionLoadService) => {
    expect(service).toBeTruthy();
  }));
});
