import { TestBed } from '@angular/core/testing';

import { AuthInterceptorService } from './auth-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthApiService } from './auth-api.service';
import { AuthStateService } from './auth-state.service';
import createSpyObj = jasmine.createSpyObj;

describe('AuthInterceptorService', () => {

  let authApi: AuthApiService;
  let authState: AuthStateService;

  beforeEach(() => {
    authApi = createSpyObj('AuthStateService', ['update']);
    authState = createSpyObj('AuthApiService', ['requiresAuth']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AuthApiService,
          useValue: authApi,
        },
        {
          provide: AuthStateService,
          useValue: authState,
        },
        {
          provide: AuthInterceptorService,
          useClass: AuthInterceptorService,
        }
      ]
    });
  });

  it('should be created', () => {
    const service: AuthInterceptorService = TestBed.get(AuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
