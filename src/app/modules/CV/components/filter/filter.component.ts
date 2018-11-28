import { FilterService } from '../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

import { findIndex, pullAt } from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filters: FilterService) {
    this.filterDates();
  }

  dateRange = [2011, 2019];

  skills = [];

  removeElement = skill => {
    this.filters.removeSkillFromFilter(skill);
  }

  filterDates = () => {
    const newRange = this.dateRange;
    const rangeFormatted = [`${newRange[0]}-01-01`, `${newRange[1]}-12-31`]
    this.filters.setNewRange(rangeFormatted);
  }

  ngOnInit() {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
      }
    );
  }

}
