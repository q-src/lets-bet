import { Injectable } from '@angular/core';
import { ParticipationApiModule } from './participation-api.module';
import { ApiUrlFactoryService } from '../api-url-factory.service';
import { Observable } from 'rxjs';
import { Participation } from './participation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ParticipationApiModule,
})
export class ParticipationApiService {

  private static PATH = '/participation';

  constructor(
    private urlFactory: ApiUrlFactoryService,
    private http: HttpClient,
  ) { }

  public create(participation: Participation): Observable<Participation> {
    return this.http.post<Participation>(this.urlFactory.create(ParticipationApiService.PATH), participation);
  }
}
