import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetQrcodeComponent } from './bet-qrcode.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BetQrcodeComponent', () => {
  let component: BetQrcodeComponent;
  let fixture: ComponentFixture<BetQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ BetQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
