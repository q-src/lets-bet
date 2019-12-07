import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrlFactoryService } from '../api-url-factory.service';
import { map, tap } from 'rxjs/operators';
import { TokenResponse } from './token-response';
import { AuthStateService } from './auth-state.service';
import { AuthApiModule } from './auth-api.module';

@Injectable({
  providedIn: AuthApiModule
})
export class AuthApiService {

  private static readonly PATH = '/api/login';

  constructor(
    private http: HttpClient,
    private urlFactory: ApiUrlFactoryService,
    private authState: AuthStateService,
  ) {
  }

  public login(username: string, password: string): Observable<boolean> {
    return this.http.post<TokenResponse>(
      this.urlFactory.create(AuthApiService.PATH),
      {username, password}
    ).pipe(
      map(response => this.processResponse(response))
    );
  }

  private processResponse(response: TokenResponse): boolean {
    if (response.access_token) {
      this.authState.update(response);
      return true;
    }
    return false;
  }
}
