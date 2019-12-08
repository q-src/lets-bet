import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Participation } from './participation';
import { Observable } from 'rxjs';
import { ParticipationApiModule } from './participation-api.module';
import { ParticipationApiService } from './participation-api.service';

@Injectable({
  providedIn: ParticipationApiModule
})
export class ParticipationResolverService implements Resolve<Participation> {

  constructor(
    private api: ParticipationApiService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Participation> {
    return this.api.find(route.params.id);
  }
}
