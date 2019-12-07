import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bet } from './bet';
import { Observable } from 'rxjs';
import { ApiUrlFactoryService } from '../api-url-factory.service';
import { BetApiModule } from './bet-api.module';

@Injectable({
  providedIn: BetApiModule
})
export class BetApiService {

  private static readonly PATH = '/bet';

  constructor(
    private urlFactory: ApiUrlFactoryService,
    private http: HttpClient,
  ) {
  }

  public create(bet: Bet): Observable<Bet> {
    return this.http.post<Bet>(this.urlFactory.create(BetApiService.PATH), bet);
  }

  public find(id: string): Observable<Bet> {
    return this.http.get<Bet>(this.urlFactory.create(BetApiService.PATH, id));
  }
}
