import { TestBed } from '@angular/core/testing';

import { BetResolverService } from './bet-resolver.service';
import { BetApiService } from './bet-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('BetResolverService', () => {

  let api: BetApiService;

  beforeEach(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BetResolverService,
          useClass: BetResolverService,
        },
        {
          provide: BetApiService,
          useValue: api,
        }
      ]
    });
  });

  it('should be created', () => {
    const service: BetResolverService = TestBed.get(BetResolverService);
    expect(service).toBeTruthy();
  });
});
