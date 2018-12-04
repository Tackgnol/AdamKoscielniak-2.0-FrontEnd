import { ServerResponse } from '../utils/ServerResponse';
import { map, catchError, tap } from 'rxjs/operators';
import { BaseService } from '../utils/baseService';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Education } from 'src/models/Education';
import IEducation from '../models/interface/IEductation';

import ISkillGroup from 'src/models/interface/ISkillGroup';
import SkillGroup from 'src/models/SkillGroup';
import Skill from '../models/submodels/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends BaseService {
  constructor(http: HttpClient) {
    super('/skill', http);
  }

  getSkillGroup(id: number) {
    return this.getOne<SkillGroup>(id).pipe(
      map(r => {
        return r;
      })
    );
  }

  getSkillList() {
    return this.getMany<{id: number, name: string}>(null, 'list').pipe(map(r => r));
  }

  getSkillsForSkillGroup(idList: Array<number>) {
    const param = idList.join(',')
    return this.getMany<string>(null, `${param}/list`).pipe(map(r => r));
  }

  getSkillGroups(query: {
    from?: string;
    to?: string;
    skills?: Array<string>;
  }) {
    return this.getMany<SkillGroup>(query).pipe(map(r => r));
  }

  newSkillGroup(education: ISkillGroup) {
    return this.post(education, 'add').pipe(map(r => r));
  }

  deleteSkillGroup(id: number) {
    return this.delete(id).pipe(
      catchError(e => {
        throw e;
      })
    );
  }

  updateSkillGroup(id: number, body: ISkillGroup) {
    return this.put(body, String(id)).pipe(
      map(r => r),
      catchError(e => {
        throw e.error.Errors;
      })
    );
  }
}
