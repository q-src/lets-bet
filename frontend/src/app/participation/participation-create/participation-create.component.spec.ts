import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationCreateComponent } from './participation-create.component';

describe('ParticipationCreateComponent', () => {
  let component: ParticipationCreateComponent;
  let fixture: ComponentFixture<ParticipationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationCreateComponent ]
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
