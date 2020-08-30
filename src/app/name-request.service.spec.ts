import { TestBed } from '@angular/core/testing';

import { NameRequestService } from './name-request.service';

describe('NameRequestService', () => {
  let service: NameRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
