import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {includes} from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() {
    this.dateRange.next(['2000-01-01', `${new Date().getFullYear()}-12-31`]);
  }

  private skills = [];
  skillFilters = new Subject<Array<string>>();
  dateRange =  new Subject<Array<string>>();

  addSkillToFilter = skill => {
    if (!includes(this.skills, skill)) {
      this.skills.push(skill);
    }
    this.skillFilters.next(this.skills);
    return this.skillFilters;

  }

  setNewRange = (newRange: Array<string>) => {
    this.dateRange.next(newRange);
  }

  removeSkillFromFilter = skill => {
    const index = this.skills.indexOf(skill);
    if (index > -1) {
      this.skills.splice(index, 1);
      this.skillFilters.next(this.skills);
      return this.skillFilters;
    } else {
      return null;
    }

  }

}
