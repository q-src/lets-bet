import { TestBed } from '@angular/core/testing';

import { AuthStateService } from './auth-state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthStateService', () => {

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          {
            provide: AuthStateService,
            useValue: AuthStateService,
          }
        ]
      });
    }
  );
  it('should be created', () => {
    const service: AuthStateService = TestBed.get(AuthStateService);
    expect(service).toBeTruthy();
  });
});
