import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { AuthApiService } from './auth-api.service';
import { AuthApiModule } from './auth-api.module';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: AuthApiModule
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authState: AuthStateService,
    private authApi: AuthApiService,
    private router: Router,
  ) {
  }

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
    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status === 401) {
          this.authState.reset();
          this.router.navigate(['/login']);
        }
        return throwError(err);
      }));
  }
}
