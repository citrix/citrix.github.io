/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsFeaturedServiceService } from './projects-featured-service.service';

describe('Service: ProjectsFeaturedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsFeaturedServiceService]
    });
  });

  it('should ...', inject([ProjectsFeaturedServiceService], (service: ProjectsFeaturedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
