import { ServerResponse } from './../utils/ServerResponse';
import { map, catchError, tap } from 'rxjs/operators';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import { HttpClient } from '@angular/common/http';
import IExperience from 'src/models/interface/IExprience';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends BaseService {
  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/experience', http);
  }

  getExperience(id: number) {
    return this.getOne<Experience>(id).pipe(
      map(r => {
        return r;
      })
    );
  }

  getExperiences(query: { from?: string; to?: string; skills?: Array<string> }) {
    return this.getMany<Experience>(query).pipe(map(r => r));
  }

  newExperience(experience: IExperience) {
    return this.post(experience, 'add').pipe(map(r => r));
  }

  deleteExperience(id: number) {
    return this.delete(id).pipe(
      catchError(e => {
        throw e;
      })
    );
  }

  updateExperience(id: number, body: IExperience) {
    return this.put(body, String(id)).pipe(
      map(r => r),
      catchError(e => {
        throw e.error.Errors;
      }));
  }
}
