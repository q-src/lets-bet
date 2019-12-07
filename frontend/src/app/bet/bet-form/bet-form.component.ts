import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Bet} from '../../bet-api/bet';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.scss']
})
export class BetFormComponent implements OnInit, OnDestroy {

  @Input()
  bet: Bet;

  form: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control(this.bet.title),
      description: this.fb.control(this.bet.description),
      rules: this.fb.control(this.bet.rules),
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
