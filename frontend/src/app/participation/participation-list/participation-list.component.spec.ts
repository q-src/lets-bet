import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationListComponent } from './participation-list.component';
import { ActivatedRoute } from '@angular/router';

describe('ParticipationListComponent', () => {
  let component: ParticipationListComponent;
  let fixture: ComponentFixture<ParticipationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipationListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                participations: []
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
