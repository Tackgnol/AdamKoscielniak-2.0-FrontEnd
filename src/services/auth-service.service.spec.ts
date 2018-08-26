import { TestBed, inject } from '@angular/core/testing';

import { RefreshServiceService } from './auth-service.service';

describe('RefreshServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshServiceService]
    });
  });

  it('should be created', inject(
    [RefreshServiceService],
    (service: RefreshServiceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
