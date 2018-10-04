import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/models/submodels/Project';

@Component({
  selector: 'app-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.css']
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
