import { ServerResponse } from './../utils/ServerResponse';
import { map, catchError, tap } from 'rxjs/operators';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Education } from 'src/models/Education';
import IEducation from '../models/interface/IEductation';

@Injectable({
  providedIn: 'root'
})
export class EducationService extends BaseService {
  constructor(http: HttpClient) {
    super('/education', http);
  }

  getEducation(id: number) {
    return this.getOne<Education>(id).pipe(
      map(r => {
        return r;
      })
    );
  }

  getEducations(query: { from?: string; to?: string; skills?: Array<string> }) {
    return this.getMany<Education>(query).pipe(map(r => r));
  }

  newEducation(education: IEducation) {
    return this.post(education, 'add').pipe(map(r => r));
  }

  deleteEducation(id: number) {
    return this.delete(id).pipe(
      catchError(e => {
        throw e;
      })
    );
  }

  updateEducation(id: number, body: IEducation) {
    return this.put(body, String(id)).pipe(
      map(r => r),
      catchError(e => {
        throw e.error.Errors;
      }));
  }
}
