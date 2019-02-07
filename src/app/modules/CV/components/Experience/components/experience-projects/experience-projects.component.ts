import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/models/submodels/Project';
import { expandH } from 'src/utils/Animations';

@Component({
  selector: 'app-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.css'],
  animations: [expandH]
})
export class ExperienceProjectsComponent implements OnInit {

  constructor() { }

  @Input()
  title: String;

  @Input()
  role: String;

  @Input()
  descrtiption: String;

  @Input()
  result: String;

  show: Boolean;

  toggleProject = () => {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
