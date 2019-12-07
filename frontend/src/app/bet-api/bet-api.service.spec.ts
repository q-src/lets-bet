import { TestBed } from '@angular/core/testing';

import { BetApiService } from './bet-api.service';
import { BetApiModule } from './bet-api.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      BetApiModule,
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: BetApiService = TestBed.get(BetApiService);
    expect(service).toBeTruthy();
  });
});
