
import { map, catchError, tap } from 'rxjs/operators';
import { BaseService } from '../utils/baseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import IHobby from 'src/models/interface/IHobby';
import Hobby from 'src/models/Hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService extends BaseService {
  constructor(http: HttpClient) {
    super('/hobby', http);
  }

  getHobby(id: number) {
    return this.getOne<Hobby>(id).pipe(
      map(r => {
        return r;
      })
    );
  }

  getHobbies(query: { from?: string; to?: string; skills?: Array<string> }) {
    return this.getMany<Hobby>(query).pipe(map(r => r));
  }

  newHobby(hobby: IHobby) {
    return this.post(hobby, 'add').pipe(map(r => r));
  }

  deleteHobby(id: number) {
    return this.delete(id).pipe(
      catchError(e => {
        throw e;
      })
    );
  }

  updateHobby(id: number, body: IHobby) {
    return this.put(body, String(id)).pipe(
      map(r => r),
      catchError(e => {
        throw e.error.Errors;
      }));
  }
}
