import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-create',
  templateUrl: './participation-create.component.html',
  styleUrls: ['./participation-create.component.scss']
})
export class ParticipationCreateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log('for bet', this.route.snapshot.data.bet);
  }

}
