/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentationServiceService } from './documentation-service.service';

describe('Service: DocumentationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentationServiceService]
    });
  });

  it('should ...', inject([DocumentationServiceService], (service: DocumentationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
