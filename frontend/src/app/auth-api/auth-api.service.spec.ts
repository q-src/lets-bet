import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthStateService } from './auth-state.service';
import createSpyObj = jasmine.createSpyObj;

describe('AuthApiService', () => {

  let authState: AuthStateService;

  beforeEach(() => {
      authState = createSpyObj('AuthStateService', ['update']);
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          {
            provide: AuthApiService,
            useClass: AuthApiService,
          },
          {
            provide: AuthStateService,
            useValue: authState,
          }
        ]
      });
    }
  );

  it('should be created', () => {
    const service: AuthApiService = TestBed.get(AuthApiService);
    expect(service).toBeTruthy();
  });
});
