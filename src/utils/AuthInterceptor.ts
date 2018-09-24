import { Router } from '@angular/router';
import {
  switchMap,
  finalize,
  filter,
  take,
  tap,
  catchError
} from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { AuthService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ITokens } from '../models/interface/ITokens';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  isRefreshingToken = false;
  constructor(private authService: AuthService, private router: Router) { }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(this.addToken(req, this.authService.authToken)).pipe(
      tap((event: HttpEvent<any>) => {
        return event;
      }),
      catchError(e => {
        if (e instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>e).status) {
            case 400:
              return this.handle400Error(e);
            case 401:
              return this.handle401Error(req, next);
            case 422:
              this.router.navigate(['login']);
              return this.authService.logout();
          }
        } else {
          return e;
        }
      })
    );
  }

  handle401Error(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next(null);

      return this.authService.refreshTokens().pipe(
        switchMap((newToken: ITokens) => {
          if (newToken) {
            this.tokenSubject.next(newToken.access_token);
            localStorage.setItem('authToken', newToken.access_token);
            localStorage.setItem('refreshToken', newToken.refresh_token);
            return next.handle(this.addToken(req, newToken.access_token));
          }
        }),
        tap(
          catchError(e => {
            return this.authService.logout();
          })
        ),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(req, token));
        })
      );
    }
  }
  handle400Error(error) {
    if (
      error &&
      error.status === 422 &&
      error.error &&
      error.error.error === 'invalid_grant'
    ) {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      this.router.navigate(['login']);
      return this.authService.logout();
    }
    return throwError(error);
  }
}
