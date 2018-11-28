import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() {
    this.fromDate.next('2000-01-01');
    this.toDate.next(`${new Date().getFullYear()}-12-31`);
  }

  private skills = [];
  skillFilters = new Subject<Array<string>>();
  fromDate: Subject<string> = new Subject<string>();
  toDate: Subject<string> = new Subject<string>();
  dateRange = [this.fromDate, this.toDate];
  addSkillToFilter = skill => {
    this.skills.push(skill);
    this.skillFilters.next(this.skills);
    return this.skillFilters;
  }

  setFromDate = (fromDate: number) => {
    this.fromDate.next(`${fromDate}-01-01`);
  }


  setToDate = (toDate: number) => {
    this.toDate.next(`${toDate}-12-31`);
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
