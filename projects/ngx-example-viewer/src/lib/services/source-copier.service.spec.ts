import { TestBed } from '@angular/core/testing';

import { SourceCopierService } from './source-copier.service';

describe('SourceCopierService', () => {
  let service: SourceCopierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceCopierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
