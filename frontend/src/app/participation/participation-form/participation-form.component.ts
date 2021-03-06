import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Participation } from '../../participation-api/participation';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.scss']
})
export class ParticipationFormComponent implements OnInit, OnDestroy {

  @Input()
  participation: Participation;

  form: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      statement: this.fb.control(this.participation.statement, Validators.required),
    });
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.participation.statement = value.statement;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  getOtherParticipations() {
    if (!this.participation.bet.participations) {
      return [];
    }
    return this.participation.bet.participations.filter(p => p.id !== this.participation.id);
  }
}
