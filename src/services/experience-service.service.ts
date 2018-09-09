import { ServerResponse } from './../utils/ServerResponse';
import { map, catchError, take } from 'rxjs/operators';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import { HttpClient } from '@angular/common/http';
import IExperience from 'src/models/interface/IExprience';

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

  getExperiences(query: { from: Date; to: Date; skills: Array<string> }) {
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
    console.log(body);
    return this.put(body, String(id)).pipe(
      catchError(e => {
        throw e;
      })
    );
  }
}
