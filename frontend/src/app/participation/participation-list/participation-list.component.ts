import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../participation-api/participation';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.scss']
})
export class ParticipationListComponent implements OnInit {

  participations: Participation[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.participations = this.route.snapshot.data.participations;
  }

}
