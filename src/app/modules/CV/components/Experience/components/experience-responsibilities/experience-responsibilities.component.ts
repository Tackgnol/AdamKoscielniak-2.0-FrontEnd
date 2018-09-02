import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../../../../../../models/Experience';

@Component({
  selector: 'app-experience-responsibilities',
  templateUrl: './experience-responsibilities.component.html',
  styleUrls: ['./experience-responsibilities.component.css']
})
export class ExperienceResponsibilitiesComponent implements OnInit {
  constructor() {}

  @Input()
  responsibilities: Array<string>;

  ngOnInit() {}
}
