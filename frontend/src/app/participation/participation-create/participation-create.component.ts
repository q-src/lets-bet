import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipationApiService } from '../../participation-api/participation-api.service';
import { Participation } from '../../participation-api/participation';
import { AuthStateService } from '../../auth-api/auth-state.service';

@Component({
  selector: 'app-participation-create',
  templateUrl: './participation-create.component.html',
  styleUrls: ['./participation-create.component.scss']
})
export class ParticipationCreateComponent implements OnInit {

  participation: Participation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ParticipationApiService,
    private auth: AuthStateService,
  ) {
  }

  ngOnInit() {
    this.participation = {
      bet: this.route.snapshot.data.bet,
    } as Participation;
    if (!this.participation.bet.participations) {
      return;
    }
    this.participation.bet.participations.forEach(participation => {
      if (participation.participant.username === this.auth.getUsername()) {
        this.navigateToParticipation(participation);
      }
    });
  }

  save() {
    this.api.create(this.participation).subscribe(participation => this.navigateToParticipation(participation));
  }

  private navigateToParticipation(participation: Participation): void {
    this.router.navigate(['../..', participation.id], {
      relativeTo: this.route
    });
  }
}
