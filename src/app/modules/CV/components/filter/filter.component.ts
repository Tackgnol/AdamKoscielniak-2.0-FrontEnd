import { FilterService } from '../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

import { findIndex, pullAt } from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filters: FilterService) { }

  dateRange = [2011, 2019];

  skills = [];

  removeElement = skill => {
    this.filters.removeSkillFromFilter(skill);
  }

  filterDates = () => {
    this.filters.setFromDate(this.dateRange[0]);
    this.filters.setToDate(this.dateRange[1]);
  }

  ngOnInit() {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
      }
    );
  }

}
