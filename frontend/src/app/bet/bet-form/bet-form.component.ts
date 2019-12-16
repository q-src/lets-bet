import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bet } from '../../bet-api/bet';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.scss']
})
export class BetFormComponent implements OnInit, OnDestroy {

  @Input()
  bet: Bet;

  @Input()
  disabled = false;

  form: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control({
          value: this.bet.title,
          disabled: this.disabled,
        },
        Validators.required
      ),
      description: this.fb.control({
          value: this.bet.description,
          disabled: this.disabled
        },
        Validators.required
      ),
      rules: this.fb.control({
          value: this.bet.rules,
          disabled: this.disabled,
        },
        Validators.required
      ),
    });
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.bet.title = value.title;
        this.bet.description = value.description;
        this.bet.rules = value.rules;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
