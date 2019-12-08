import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetEditComponent } from './bet-edit.component';
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Bet } from '../../bet-api/bet';
import { BetApiService } from '../../bet-api/bet-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('BetEditComponent', () => {
  let component: BetEditComponent;
  let fixture: ComponentFixture<BetEditComponent>;
  let api: ParticipationApiService;
  const bet: Bet = {} as Bet;


  beforeEach(async(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BetEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {bet}
            }
          }
        },
        {
          provide: BetApiService,
          useValue: api
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
