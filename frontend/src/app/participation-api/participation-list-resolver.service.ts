import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Participation } from './participation';
import { Observable } from 'rxjs';
import { ParticipationApiService } from './participation-api.service';
import { ParticipationApiModule } from './participation-api.module';

@Injectable({
  providedIn: ParticipationApiModule
})
export class ParticipationListResolverService implements Resolve<Participation[]> {

  constructor(
    private api: ParticipationApiService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Participation[]> {
    return this.api.list();
  }
}
