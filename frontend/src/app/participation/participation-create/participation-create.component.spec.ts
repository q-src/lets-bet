import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationCreateComponent } from './participation-create.component';
import { Bet } from '../../bet-api/bet';
import { ActivatedRoute } from '@angular/router';

describe('ParticipationCreateComponent', () => {
  let component: ParticipationCreateComponent;
  let fixture: ComponentFixture<ParticipationCreateComponent>;
  const bet: Bet = {} as Bet;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationCreateComponent ],
      providers: [
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
