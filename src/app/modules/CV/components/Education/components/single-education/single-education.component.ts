import { Component, OnInit, Input } from '@angular/core';
import IEducation from 'src/models/interface/IEductation';
import { slide, flip } from 'src/utils/Animations';

@Component({
  selector: 'app-education-single-education',
  templateUrl: './single-education.component.html',
  styleUrls: ['./single-education.component.css'],
  animations: [
    slide, flip
  ]
})
export class SingleEducationComponent implements OnInit {

  constructor() { }

  @Input()
  education: IEducation;

  showProjects = false;

  displayDateTo: number;
  displayDateFrom: number;

  toggleProjects = () => {
    this.showProjects = !this.showProjects;
  }

  ngOnInit() {
    this.displayDateTo = this.education.BeginDate.$date;
    this.displayDateFrom = this.education.EndDate.$date;
  }

}
