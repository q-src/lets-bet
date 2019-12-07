import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Bet } from './bet';
import { Observable } from 'rxjs';
import { BetApiService } from './bet-api.service';
import { BetApiModule } from './bet-api.module';

@Injectable({
  providedIn: BetApiModule
})
export class BetResolverService implements Resolve<Bet>{

  constructor(
    private api: BetApiService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bet> {
    return this.api.find(route.params.betId);
  }
}
