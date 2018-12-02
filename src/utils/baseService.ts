import { isNil } from 'lodash';

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ServerResponse } from './ServerResponse';

import { IHeader } from '../models/interface/IHeader';

export class BaseService {
  constructor(private url: string, private http: HttpClient) {
    this.url = this.baseUrl + url;
  }
  baseUrl = 'http://127.0.0.1:5000';
  generateHeaders = (input: Array<IHeader>): Headers => {
    const headers = new Headers();

    for (const header of input) {
      headers.append(header.key, header.value);
    }
    return headers;
  };

  getOne<T>(id): Observable<ServerResponse<T>> {
    return this.http.get<ServerResponse<T>>(this.url + String(id)).pipe(
      map(data => {
        return new ServerResponse<T>(data);
      })
    );
  }

  getMany<T>(queryParametrs, param: string = null) {
    const paramQuery = param ? `/${param}` : ''
    return this.http
      .get<ServerResponse<[T]>>(this.url + paramQuery, { params: queryParametrs })
      .pipe(
        map(data => {
          return new ServerResponse<[T]>(data);
        })
      );
  }


  post<T>(body: object, addUrl: string = '') {
    return this.http
      .post<ServerResponse<T>>(this.url + '/' + addUrl, body)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(e => {
          throw e;
        })
      );
  }

  put<T>(body: object, addUrl: string = '') {
    return this.http.put<ServerResponse<T>>(this.url + '/' + addUrl, body).pipe(
      map(data => new ServerResponse<T>(data)),
      catchError(e => {
        throw e;
      })
    );
  }

  delete<T>(id) {
    return this.http
      .delete<ServerResponse<T>>(this.url + '/' + String(id))
      .pipe(
        map(data => {
          return new ServerResponse<T>(data);
        }),
        catchError(e => {
          throw e;
        })
      );
  }
}
