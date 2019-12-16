import { Injectable } from '@angular/core';
import { TokenResponse } from './token-response';
import { AuthApiModule } from './auth-api.module';

@Injectable({
  providedIn: AuthApiModule
})
export class AuthStateService {

  public static readonly TOKEN_KEY = 'access_token';

  public static readonly USERNAME_KEY = 'username';

  constructor() {
  }

  public getUsername() {
    return localStorage.getItem(AuthStateService.USERNAME_KEY);
  }

  public reset() {
    localStorage.removeItem(AuthStateService.TOKEN_KEY);
    localStorage.removeItem(AuthStateService.USERNAME_KEY);
  }

  public update(token: TokenResponse): void {
    localStorage.setItem(AuthStateService.TOKEN_KEY, token.access_token);
    localStorage.setItem(AuthStateService.USERNAME_KEY, token.username);
  }

  public getAccessToken(): string {
    return localStorage.getItem(AuthStateService.TOKEN_KEY);
  }

}
