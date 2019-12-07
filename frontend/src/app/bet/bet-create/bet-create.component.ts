import { Component, OnInit } from '@angular/core';
import {Bet} from '../../bet-api/bet';
import { BetApiService } from '../../bet-api/bet-api.service';

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

  bet: Bet;

  constructor(
    private api: BetApiService,
  ) { }

  ngOnInit() {
    this.bet = {} as Bet;
  }

  save() {
    this.api.create(this.bet).subscribe();
  }
}
