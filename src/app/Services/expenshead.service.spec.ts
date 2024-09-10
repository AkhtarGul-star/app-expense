import { TestBed } from '@angular/core/testing';

import { ExpensheadService } from './expenshead.service';

describe('ExpensheadService', () => {
  let service: ExpensheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
