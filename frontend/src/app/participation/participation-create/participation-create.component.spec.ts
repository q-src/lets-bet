import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationCreateComponent } from './participation-create.component';
import { Bet } from '../../bet-api/bet';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('ParticipationCreateComponent', () => {
  let component: ParticipationCreateComponent;
  let fixture: ComponentFixture<ParticipationCreateComponent>;
  let api: ParticipationApiService;
  const bet: Bet = {} as Bet;

  beforeEach(async(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ParticipationCreateComponent ],
      providers: [
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
