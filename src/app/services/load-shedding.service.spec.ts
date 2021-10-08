import { TestBed } from '@angular/core/testing';

import { LoadSheddingService } from './load-shedding.service';

describe('LoadSheddingService', () => {
  let service: LoadSheddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadSheddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
