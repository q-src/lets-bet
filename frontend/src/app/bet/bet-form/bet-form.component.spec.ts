import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormComponent } from './bet-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Bet } from '../bet';

describe('BetFormComponent', () => {
  let component: BetFormComponent;
  let fixture: ComponentFixture<BetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: FormBuilder,
          useClass: FormBuilder,
        }
      ],
      declarations: [BetFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormComponent);
    component = fixture.componentInstance;
    component.bet = {} as Bet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
