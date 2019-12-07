import { Component, OnInit } from '@angular/core';
import {Bet} from '../bet';

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

  bet: Bet;

  constructor() { }

  ngOnInit() {
    this.bet = {} as Bet;
  }

  save() {
    console.log('saving', this.bet);
  }
}
