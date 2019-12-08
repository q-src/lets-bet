import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationEditComponent } from './participation-edit.component';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../participation-api/participation';
import createSpyObj = jasmine.createSpyObj;
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ParticipationEditComponent', () => {
  let component: ParticipationEditComponent;
  let fixture: ComponentFixture<ParticipationEditComponent>;
  let api: ParticipationApiService;
  const participation: Participation = {} as Participation;

  beforeEach(async(() => {
    api = createSpyObj('BetApiService', ['find']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ParticipationEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {participation}
            }
          }
        },
        {
          provide: ParticipationApiService,
          useValue: api
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
