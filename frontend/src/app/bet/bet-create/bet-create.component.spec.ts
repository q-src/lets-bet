import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCreateComponent } from './bet-create.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BetApiService } from '../../bet-api/bet-api.service';
import { Subject } from 'rxjs';
import { Bet } from '../../bet-api/bet';
import createSpyObj = jasmine.createSpyObj;
import { ActivatedRoute, Router } from '@angular/router';

describe('BetCreateComponent', () => {
  let component: BetCreateComponent;
  let fixture: ComponentFixture<BetCreateComponent>;
  let api: BetApiService;
  let router: Router;
  const route: ActivatedRoute = {} as ActivatedRoute;

  beforeEach(async(() => {
    api = createSpyObj('BetApiService', {create: new Subject<Bet>()});
    router = createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BetCreateComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: ActivatedRoute,
          useValue: route,
        },
        {
          provide: BetApiService,
          useValue: api,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
