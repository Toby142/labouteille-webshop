import { TestBed } from '@angular/core/testing';

import { StorefrontApiService } from './storefront-api.service';

describe('StorefrontApiService', () => {
  let service: StorefrontApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorefrontApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
