import { TestBed } from '@angular/core/testing';

import { GetResultService } from './get-result.service';

describe('GetResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetResultService = TestBed.get(GetResultService);
    expect(service).toBeTruthy();
  });
});
