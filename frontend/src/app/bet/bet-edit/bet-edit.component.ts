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

  private static readonly STATUS_CRATED = 'CREATED';

  private static readonly STATUS_STARTED = 'STARTED';

  private static readonly STATUS_COMPLETED = 'COMPLETED';

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

  isStarted() {
    return this.bet.status === BetEditComponent.STATUS_STARTED;
  }

  start() {
    this.bet.status = BetEditComponent.STATUS_STARTED;
    this.api.update(this.bet).subscribe(() => this.stepper.next());
  }

  private activateNextStep() {
    switch (this.bet.status) {
      case BetEditComponent.STATUS_CRATED:
        this.setStepperIndex(1);
        break;
      case BetEditComponent.STATUS_STARTED:
        this.setStepperIndex(2);
        break;
      case BetEditComponent.STATUS_COMPLETED:
        this.setStepperIndex(3);
    }
  }

  private setStepperIndex(index: number): void {
    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError in dev mode
    setTimeout(() => this.stepper.selectedIndex = index);
  }
}
