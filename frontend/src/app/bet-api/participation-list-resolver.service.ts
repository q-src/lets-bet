import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Bet } from './bet';
import { BetApiModule } from './bet-api.module';
import { BetApiService } from './bet-api.service';

@Injectable({
  providedIn: BetApiModule
})
export class BetListResolverService implements Resolve<Bet[]> {

  constructor(
    private api: BetApiService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bet[]> {
    return this.api.list();
  }
}
