import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bet } from '../../bet-api/bet';
import { BetApiService } from '../../bet-api/bet-api.service';

@Component({
  selector: 'app-bet-edit',
  templateUrl: './bet-edit.component.html',
  styleUrls: ['./bet-edit.component.scss']
})
export class BetEditComponent implements OnInit {

  private bet: Bet;

  constructor(
    private route: ActivatedRoute,
    private api: BetApiService,
  ) {
  }

  ngOnInit() {
    this.bet = this.route.snapshot.data.bet;
  }

  save() {
    this.api.update(this.bet).subscribe();
  }

  isStarted() {
    return this.bet.status === 'STARTED';
  }

}
