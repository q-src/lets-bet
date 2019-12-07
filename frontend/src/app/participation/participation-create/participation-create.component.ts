import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../participation';

@Component({
  selector: 'app-participation-create',
  templateUrl: './participation-create.component.html',
  styleUrls: ['./participation-create.component.scss']
})
export class ParticipationCreateComponent implements OnInit {

  participation: Participation;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.participation = {
      bet: this.route.snapshot.data.bet,
    } as Participation;
  }

  save() {
    console.log('saving', this.participation);
  }
}
