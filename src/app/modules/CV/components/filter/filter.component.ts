import { FilterService } from '../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

import {SkillService} from '../../../../../services/skill-service.service';
import {filter} from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filters: FilterService, private skillService: SkillService) {
    this.filterDates();
  }

  dateRange = [2011,  new Date().getFullYear()];

  skills = [];
  skillGroups = [];
  removeElement = skill => {
    this.filters.removeSkillFromFilter(skill);
  }

  resetFilter = () => {
    this.skills = [];
    this.filters.setMultiFilter([]);
    this.dateRange = [2011, new Date().getFullYear()];
    this.filterDates();
    for (const skill of this.skillGroups) {
      skill.checked = false;
    }
  }

  filterDates = () => {
    const newRange = this.dateRange;
    const rangeFormatted = [`${newRange[0]}-01-01`, `${newRange[1]}-12-31`];
    this.filters.setNewRange(rangeFormatted);
  }
  filterSkills = () => {
    const selectedSkillGroups = this.selectedOptions();
    const idList = [];
    for (const group of selectedSkillGroups) {
      idList.push(group.id);
    }
    this.skillService.getSkillsForSkillGroup(idList).subscribe(
      r => {
        this.skills = r.Value;
        this.filters.setMultiFilter(this.skills);
      }
    );
  }

  filterClick = () => {
    this.filterDates();
    this.filterSkills();
  }

  selectedOptions = () => {
    return filter(this.skillGroups, s => s.checked);
  }
  ngOnInit() {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
      }
    );
    this.skillService.getSkillList().subscribe(
      r => {
        for (const skillGroup of r.Value) {
          this.skillGroups.push({id: skillGroup.id, name: skillGroup.name, checked: false});
        }

      }
    );
  }

}
