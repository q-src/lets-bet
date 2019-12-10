import { TestBed } from '@angular/core/testing';

import { ResultApiService } from './result-api.service';
import { ResultApiModule } from './result-api.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResultApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ResultApiModule,
      HttpClientTestingModule,]
  }));

  it('should be created', () => {
    const service: ResultApiService = TestBed.get(ResultApiService);
    expect(service).toBeTruthy();
  });
});
