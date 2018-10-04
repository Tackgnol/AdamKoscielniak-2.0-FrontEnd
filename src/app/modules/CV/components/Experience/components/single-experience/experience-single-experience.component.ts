
import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/models/Experience';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-experience-single-experience',
  templateUrl: './experience-single-experience.component.html',
  styleUrls: ['./experience-single-experience.component.css']
})
export class ExperienceSingleExperienceComponent implements OnInit {

  constructor(private filters: FilterService) { }

  @Input()
  experience: Experience;

  showProjects: boolean = null;
  initShow = false;

  toggleProjects = () => {
    this.initShow = true;
    this.showProjects = !this.showProjects;
  }

  onSkillClick = skill => {
    this.filters.addSkillToFilter(skill);
  }

  ngOnInit() {
  }

}
