import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bet } from '../../bet-api/bet';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit {

  bets: Bet[];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.bets = this.route.snapshot.data.bets;
  }
}
