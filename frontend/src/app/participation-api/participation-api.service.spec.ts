import { TestBed } from '@angular/core/testing';

import { ParticipationApiService } from './participation-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ParticipationApiModule } from './participation-api.module';

describe('ParticipationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ParticipationApiModule,
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: ParticipationApiService = TestBed.get(ParticipationApiService);
    expect(service).toBeTruthy();
  });
});
