import { ITokens } from './../models/interface/ITokens';
import { ServerResponse } from './../utils/ServerResponse';
import { ICredentials } from './../models/interface/ICredentials';
import { Tokens } from './../models/Tokens';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IServerResponse } from '../utils/IServerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  public authToken: string;
  public refreshToken: string;

  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000', http);
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
  };

  refreshTokens = () => {
    const body: ITokens = {
      access_token: this.authToken,
      refresh_token: this.refreshToken
    };
    this.authToken = this.refreshToken;
    return this.post<Tokens>(body, 'refresh').pipe(
      map((r: IServerResponse) => {
        return r.Value;
      })
    );
  };

  logout = () => {
    localStorage.setItem('authToken', null);
    localStorage.setItem('refreshToken', null);
    return Observable.create('logout successfull');
  };
}
