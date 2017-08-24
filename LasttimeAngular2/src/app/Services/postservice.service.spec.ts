/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostserviceService } from './postservice.service';

describe('PostserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostserviceService]
    });
  });

  it('should ...', inject([PostserviceService], (service: PostserviceService) => {
    expect(service).toBeTruthy();
  }));
});
