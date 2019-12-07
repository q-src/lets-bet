import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { AuthApiService } from './auth-api.service';
import { AuthApiModule } from './auth-api.module';

@Injectable({
  providedIn: AuthApiModule
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private authState: AuthStateService,
    private authApi: AuthApiService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authApi.requiresAuth(request)) {
      return next.handle(request);
    }

    const token = this.authState.getAccessToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
