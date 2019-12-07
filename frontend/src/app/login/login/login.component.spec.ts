import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Bet } from '../../bet-api/bet';
import { AuthApiService } from '../../auth-api/auth-api.service';
import createSpyObj = jasmine.createSpyObj;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let api: AuthApiService;

  beforeEach(async(() => {
    api = createSpyObj('AuthApiService', {login: new Subject<Bet>()});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        {
          provide: FormBuilder,
          useClass: FormBuilder,
        },
        {
          provide: AuthApiService,
          useValue: api,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
