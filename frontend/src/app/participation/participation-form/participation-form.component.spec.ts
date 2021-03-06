import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationFormComponent } from './participation-form.component';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Participation } from '../../participation-api/participation';
import { Bet } from '../../bet-api/bet';
import { User } from '../../auth-api/user';

describe('ParticipationFormComponent', () => {
  let component: ParticipationFormComponent;
  let fixture: ComponentFixture<ParticipationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: FormBuilder,
          useClass: FormBuilder,
        }
      ],
      declarations: [ParticipationFormComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationFormComponent);
    component = fixture.componentInstance;
    component.participation = {
      bet: {
        commissioner: {} as User,
        participations: []
      } as Bet,
    } as Participation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
