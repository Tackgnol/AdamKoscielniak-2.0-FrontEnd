import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/models/submodels/Project';
import { expandH } from 'src/utils/Animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [expandH]
})
export class ProjectsComponent implements OnInit {

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
