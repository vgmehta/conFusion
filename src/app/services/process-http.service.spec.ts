import { TestBed } from '@angular/core/testing';

import { ProcessHttpService } from './process-http.service';

describe('ProcessHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHttpService = TestBed.get(ProcessHttpService);
    expect(service).toBeTruthy();
  });
});
