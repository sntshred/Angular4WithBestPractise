/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorServiceService } from './author-service.service';

describe('AuthorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorServiceService]
    });
  });

  it('should ...', inject([AuthorServiceService], (service: AuthorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
