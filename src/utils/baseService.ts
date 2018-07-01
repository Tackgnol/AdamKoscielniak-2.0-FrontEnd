import { IServerResponse } from './IServerResponse';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { ServerResponse } from './ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private url: string, private http: HttpClient) {}
  getOne<T>(id) {
    return this.http.get<ServerResponse<T>>(this.url + String(id)).pipe(
      map(data => {
        return new ServerResponse<T>(data);
      })
    );
  }
}
