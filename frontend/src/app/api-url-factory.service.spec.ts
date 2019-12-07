import { TestBed } from '@angular/core/testing';

import { ApiUrlFactoryService } from './api-url-factory.service';

describe('ApiUrlFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUrlFactoryService = TestBed.get(ApiUrlFactoryService);
    expect(service).toBeTruthy();
  });
});
