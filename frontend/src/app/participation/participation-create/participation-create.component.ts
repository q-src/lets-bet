import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import { Participation } from '../../participation-api/participation';

@Component({
  selector: 'app-participation-create',
  templateUrl: './participation-create.component.html',
  styleUrls: ['./participation-create.component.scss']
})
export class ParticipationCreateComponent implements OnInit {

  participation: Participation;

  constructor(
    private route: ActivatedRoute,
    private api: ParticipationApiService,
  ) {
  }

  ngOnInit() {
    this.participation = {
      bet: this.route.snapshot.data.bet,
    } as Participation;
  }

  save() {
    this.api.create(this.participation).subscribe();
  }
}
