import { TestBed } from '@angular/core/testing';

import { StackblitzService } from './stackblitz.service';

describe('StackblitzService', () => {
  let service: StackblitzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackblitzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
