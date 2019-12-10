import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bet } from '../../bet-api/bet';
import { BetApiService } from '../../bet-api/bet-api.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-bet-edit',
  templateUrl: './bet-edit.component.html',
  styleUrls: ['./bet-edit.component.scss']
})
export class BetEditComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper', {static: false})
  private stepper: MatStepper;

  private bet: Bet;

  constructor(
    private route: ActivatedRoute,
    private api: BetApiService,
  ) {
  }

  ngOnInit() {
    this.bet = this.route.snapshot.data.bet;
  }

  ngAfterViewInit(): void {
    this.activateNextStep();
  }

  save() {
    this.api.update(this.bet).subscribe();
  }

  isCompleted() {
    return !!this.bet.result;
  }

  start() {
    this.bet.isStarted = true;
    this.api.update(this.bet).subscribe(() => this.stepper.next());
  }

  private activateNextStep() {
    if (!this.bet.isStarted) {
      this.setStepperIndex(1);
    } else if (!this.isCompleted()) {
      this.setStepperIndex(2);
    } else if (this.isCompleted()) {
      this.setStepperIndex(3);
    }
  }

  private setStepperIndex(index: number): void {
    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError in dev mode
    setTimeout(() => this.stepper.selectedIndex = index);
  }
}
