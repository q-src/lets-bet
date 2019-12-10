import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Bet } from '../../bet-api/bet';
import { MatSelectionList } from '@angular/material';
import { Participation } from '../../participation-api/participation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResultApiService } from '../../result-api/result-api.service';
import { Result } from '../../result-api/result';

@Component({
  selector: 'app-bet-result-form',
  templateUrl: './bet-result-form.component.html',
  styleUrls: ['./bet-result-form.component.scss']
})
export class BetResultFormComponent implements OnInit {

  @Input()
  bet: Bet;

  @Input()
  disabled = false;

  form: FormGroup;

  @ViewChild('selection', {static: true})
  selection: MatSelectionList;

  constructor(
    private api: ResultApiService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      reasoning: this.fb.control({
        value: this.bet.result ? this.bet.result.reasoning : undefined,
        disabled: this.disabled,
      })
    });
  }

  complete() {
    this.api.create(
      {
        bet: {
          id: this.bet.id
        },
        reasoning: this.form.value.reasoning,
        winners: this.selection.selectedOptions.selected.map(option => ({id: option.value} as Participation)),
      } as Result
    ).subscribe();
  }

  isSelected(participation: Participation) {
    if (!this.bet.result) {
      return false;
    }
    return this.bet.result.winners.map(winner => winner.id).indexOf(participation.id) >= 0;
  }
}
