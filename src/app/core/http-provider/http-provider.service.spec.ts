import { TestBed } from '@angular/core/testing';

import { HTTPProviderService } from './http-provider.service';

describe('HttpProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTTPProviderService = TestBed.get(HTTPProviderService);
    expect(service).toBeTruthy();
  });
});
