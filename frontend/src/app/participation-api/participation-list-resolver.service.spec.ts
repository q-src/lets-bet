import { TestBed } from '@angular/core/testing';

import { ParticipationListResolverService } from './participation-list-resolver.service';
import { ParticipationApiService } from './participation-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('ParticipationListResolverService', () => {

  let api: ParticipationApiService;

  beforeEach(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ParticipationApiService,
          useValue: api,
        },
        {
          provide: ParticipationListResolverService,
          useClass: ParticipationListResolverService,
        }
      ]
    })
  });

  it('should be created', () => {
    const service: ParticipationListResolverService = TestBed.get(ParticipationListResolverService);
    expect(service).toBeTruthy();
  });
});
