import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-skills',
  templateUrl: './experience-skills.component.html',
  styleUrls: ['./experience-skills.component.css']
})
export class ExperienceSkillsComponent implements OnInit {
  constructor() {}

  @Input()
  skills: Array<string>;

  ngOnInit() {}
}
