import { TestBed, inject } from '@angular/core/testing';

import { ImageDownloadService } from './image-download.service';

describe('ImageDownloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageDownloadService]
    });
  });

  it('should be created', inject([ImageDownloadService], (service: ImageDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
