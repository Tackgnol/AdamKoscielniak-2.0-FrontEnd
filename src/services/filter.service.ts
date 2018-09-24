import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  private skills = [];
  skillFilters = new Subject<Array<string>>();
  fromDate = '2000-01-01';
  toDate = `${new Date().getFullYear()}-12-31`;

  addSkillToFilter = skill => {
    this.skills.push(skill);
    this.skillFilters.next(this.skills);
    return this.skillFilters;
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
