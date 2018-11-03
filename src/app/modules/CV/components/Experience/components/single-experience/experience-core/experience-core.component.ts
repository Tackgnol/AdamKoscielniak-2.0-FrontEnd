import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-experience-core',
  templateUrl: './experience-core.component.html',
  styleUrls: ['./experience-core.component.css']
})
export class ExperienceCoreComponent implements OnInit {

  constructor(private filters: FilterService) { }

  @Input()
  dateFrom: any;
  @Input()
  dateTo: any;
  @Input()
  currentEmployer: boolean;
  @Input()
  Employer: string;
  @Input()
  Position: string;
  @Input()
  Responsibilities: Array<string>;
  @Input()
  Skills: Array<string>;

  onSkillClick = skill => {
    this.filters.addSkillToFilter(skill);
  }

  ngOnInit() {

  }

}
