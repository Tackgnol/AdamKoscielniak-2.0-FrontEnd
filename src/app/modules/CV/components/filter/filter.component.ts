import { FilterService } from './../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

import { findIndex, pullAt } from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filters: FilterService) { }

  skills = [];

  removeElement = skill => {
    this.filters.removeSkillFromFilter(skill);
    // .subscribe(
    //   r => {
    //     const index = this.skills.indexOf(skill);
    //     if (index > -1) {
    //       this.skills.splice(index, 1);
    //     }
    //   }
    // );
  }

  ngOnInit() {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
      }
    );
  }

}
