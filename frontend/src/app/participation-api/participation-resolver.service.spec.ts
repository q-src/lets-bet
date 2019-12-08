import { TestBed } from '@angular/core/testing';

import { ParticipationResolverService } from './participation-resolver.service';
import { ParticipationApiService } from './participation-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('ParticipationResolverService', () => {

  let api: ParticipationApiService;

  beforeEach(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ParticipationResolverService,
          useClass: ParticipationResolverService,
        },
        {
          provide: ParticipationApiService,
          useValue: api
        }
      ]
    });
  });

  it('should be created', () => {
    const service: ParticipationResolverService = TestBed.get(ParticipationResolverService);
    expect(service).toBeTruthy();
  });
});
