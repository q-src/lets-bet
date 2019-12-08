import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../participation-api/participation';
import { ParticipationApiService } from '../../participation-api/participation-api.service';

@Component({
  selector: 'app-participation-edit',
  templateUrl: './participation-edit.component.html',
  styleUrls: ['./participation-edit.component.scss']
})
export class ParticipationEditComponent implements OnInit {

  private participation: Participation;

  constructor(
    private route: ActivatedRoute,
    private api: ParticipationApiService,
  ) { }

  ngOnInit() {
    this.participation = this.route.snapshot.data.participation;
  }

  save() {
    this.api.update(this.participation).subscribe();
  }

}
