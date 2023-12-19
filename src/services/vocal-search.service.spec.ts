import { TestBed } from '@angular/core/testing';

import { VocalSearchService } from './vocal-search.service';

describe('VocalSearchService', () => {
  let service: VocalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
