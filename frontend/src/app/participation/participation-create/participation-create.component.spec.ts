import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationCreateComponent } from './participation-create.component';
import { Bet } from '../../bet-api/bet';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import createSpyObj = jasmine.createSpyObj;
import { AuthStateService } from '../../auth-api/auth-state.service';

describe('ParticipationCreateComponent', () => {
  let component: ParticipationCreateComponent;
  let fixture: ComponentFixture<ParticipationCreateComponent>;
  let api: ParticipationApiService;
  let router: Router;
  let authState: AuthStateService;
  const bet: Bet = {} as Bet;

  beforeEach(async(() => {
    api = createSpyObj('BetApiService', ['find']);
    router = createSpyObj('Router', ['navigate']);
    authState = createSpyObj('AuthStateService', ['getUsername']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ParticipationCreateComponent ],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: AuthStateService,
          useValue: authState,
        },
        {
          provide: ParticipationApiService,
          useValue: api
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {bet}
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
