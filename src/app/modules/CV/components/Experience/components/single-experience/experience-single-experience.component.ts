import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/models/Experience';
import { FilterService } from 'src/services/filter.service';
import { slide, flip } from 'src/utils/Animations';


@Component({
  selector: 'app-experience-single-experience',
  templateUrl: './experience-single-experience.component.html',
  styleUrls: ['./experience-single-experience.component.css'],
  animations: [
    slide, flip
  ]
})
export class ExperienceSingleExperienceComponent implements OnInit {

  constructor() { }

  @Input()
  experience: Experience;

  showProjects: boolean = null;

  toggleProjects = () => {
    this.showProjects = !this.showProjects;
  }



  ngOnInit() {
  }

}
