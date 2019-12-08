import { TestBed } from '@angular/core/testing';

import { BetApiService } from './bet-api.service';
import { BetListResolverService } from './participation-list-resolver.service';
import createSpyObj = jasmine.createSpyObj;

describe('BetListResolverService', () => {

  let api: BetApiService;

  beforeEach(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BetApiService,
          useValue: api,
        },
        {
          provide: BetListResolverService,
          useClass: BetListResolverService,
        }
      ]
    });
  });

  it('should be created', () => {
    const service: BetListResolverService = TestBed.get(BetListResolverService);
    expect(service).toBeTruthy();
  });
});
