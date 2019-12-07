import { Injectable } from '@angular/core';
import { TokenResponse } from './token-response';
import { AuthApiModule } from './auth-api.module';

@Injectable({
  providedIn: AuthApiModule
})
export class AuthStateService {

  public static readonly TOKEN_KEY = 'access_token';

  constructor() {
  }

  public update(token: TokenResponse): void {
    localStorage.setItem(AuthStateService.TOKEN_KEY, token.access_token);
  }

  public getAccessToken(): string {
    return localStorage.getItem(AuthStateService.TOKEN_KEY);
  }

}
