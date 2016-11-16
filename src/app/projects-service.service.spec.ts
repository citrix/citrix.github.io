/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsServiceService } from './projects-service.service';

describe('Service: ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsServiceService]
    });
  });

  it('should ...', inject([ProjectsServiceService], (service: ProjectsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
