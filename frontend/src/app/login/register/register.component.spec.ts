import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from '../../auth-api/auth-api.service';
import { Subject } from 'rxjs';
import { Bet } from '../../bet-api/bet';
import createSpyObj = jasmine.createSpyObj;
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let api: AuthApiService;
  let router: Router;

  beforeEach(async(() => {
    api = createSpyObj('AuthApiService', {login: new Subject<Bet>()});
    router = createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: ActivatedRoute,
          useValue: {},
        },
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
