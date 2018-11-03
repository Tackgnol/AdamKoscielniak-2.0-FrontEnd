import { Router } from '@angular/router';
import { ITokens } from './../models/interface/ITokens';
import { Tokens } from './../models/Tokens';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IServerResponse } from '../utils/IServerResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  public authToken: string;
  public refreshToken: string;

  constructor(http: HttpClient, private router: Router) {
    super('', http);
    this.refreshToken = localStorage.getItem('refreshToken');
    this.authToken = localStorage.getItem('authToken');
  }

  login = (userEmail: string, userPassword: string) => {
    const body = {
      Email: userEmail,
      Password: userPassword
    };

    return this.post<Tokens>(body, 'login').pipe(
      map((data: IServerResponse) => {
        localStorage.setItem('authToken', data.Value.access_token);
        localStorage.setItem('refreshToken', data.Value.refresh_token);
        return data;
      }),
      catchError(e => {
        throw e.error.Errors;
      })
    );
  }

  refreshTokens = () => {
    const body: ITokens = {
      access_token: this.authToken,
      refresh_token: this.refreshToken
    };
    this.authToken = this.refreshToken;
    return this.post<Tokens>(body, 'refresh').pipe(
      map((r: IServerResponse) => {
        localStorage.setItem('authToken', r.Value.access_token);
        localStorage.setItem('refreshToken', r.Value.refresh_token);
        return r.Value.access_token;
      })
    );
  }

  logout = () => {
    localStorage.setItem('authToken', null);
    localStorage.setItem('refreshToken', null);
    this.router.navigate(['/login']);
  }
}
