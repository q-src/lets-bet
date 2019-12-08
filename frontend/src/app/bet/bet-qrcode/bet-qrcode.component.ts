import { Component, Input, OnInit } from '@angular/core';
import { Bet } from '../../bet-api/bet';

@Component({
  selector: 'app-bet-qrcode',
  templateUrl: './bet-qrcode.component.html',
  styleUrls: ['./bet-qrcode.component.scss']
})
export class BetQrcodeComponent implements OnInit {

  @Input()
  bet: Bet;

  constructor() { }

  get data(): string {
    if (!this.bet) {
      return '';
    }
    return window.location.origin + '/participation/create/' + this.bet.id;
  }

  ngOnInit() {
  }

}
