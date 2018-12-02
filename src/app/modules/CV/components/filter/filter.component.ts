import { FilterService } from '../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

import { findIndex, pullAt } from 'lodash';
import {SkillService} from '../../../../../services/skill-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filters: FilterService, private skillService: SkillService) {
    this.filterDates();
  }

  dateRange = [2011, 2019];

  skills = [];
  skillGroups = [];
  removeElement = skill => {
    this.filters.removeSkillFromFilter(skill);
  }

  filterDates = () => {
    const newRange = this.dateRange;
    const rangeFormatted = [`${newRange[0]}-01-01`, `${newRange[1]}-12-31`];
    this.filters.setNewRange(rangeFormatted);
  }

  ngOnInit() {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
      }
    );
    this.skillService.getSkillList().subscribe(
      r => {
        console.log(r);
        this.skillGroups = r.Value;
      }
    );
  }

}
