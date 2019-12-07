import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCreateComponent } from './bet-create.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BetCreateComponent', () => {
  let component: BetCreateComponent;
  let fixture: ComponentFixture<BetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BetCreateComponent]
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
