import { map } from 'rxjs/operators';
import { BaseService } from './../utils/baseService';
import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../utils/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends BaseService {
  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/experience/', http);
  }

  getExperience(id: number) {
    return this.getOne<Experience>(id).pipe(
      map(r => {
        return r;
      })
    );
  }
}
