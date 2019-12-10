import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResultApiService } from '../../result-api/result-api.service';
import createSpyObj = jasmine.createSpyObj;
import { FormBuilder } from '@angular/forms';
import { BetResultFormComponent } from './bet-result-form.component';
import { Bet } from '../../bet-api/bet';

describe('BetResultFormComponent', () => {
  let component: BetResultFormComponent;
  let fixture: ComponentFixture<BetResultFormComponent>;
  let api: ResultApiService;

  beforeEach(async(() => {
    api = createSpyObj('ResultApiService', ['create']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BetResultFormComponent],
      providers: [
        {
          provide: ResultApiService,
          useValue: api
        },
        {
          provide: FormBuilder,
          useClass: FormBuilder,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetResultFormComponent);
    component = fixture.componentInstance;
    component.bet = {} as Bet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
