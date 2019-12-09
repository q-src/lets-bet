import { Component, OnInit } from '@angular/core';
import {Bet} from '../../bet-api/bet';
import { BetApiService } from '../../bet-api/bet-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

  bet: Bet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: BetApiService,
  ) { }

  ngOnInit() {
    this.bet = {} as Bet;
  }

  save() {
    this.api.create(this.bet).subscribe(bet => this.router.navigate(['..', bet.id], {relativeTo: this.route}));
  }
}
