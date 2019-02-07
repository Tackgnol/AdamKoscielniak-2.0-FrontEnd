import { Component, OnInit, Input } from '@angular/core';
import Skill from 'src/models/submodels/Skill';

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css']
})
export class SingleSkillComponent implements OnInit {

  constructor() { }

  @Input()
  skill: Skill;

  ngOnInit() {
  }

}
