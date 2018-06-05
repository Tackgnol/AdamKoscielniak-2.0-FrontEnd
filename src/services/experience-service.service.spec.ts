import { TestBed, inject } from '@angular/core/testing';

import { ExperienceServiceService } from './experience-service.service';

describe('ExperienceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceServiceService]
    });
  });

  it('should be created', inject([ExperienceServiceService], (service: ExperienceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
