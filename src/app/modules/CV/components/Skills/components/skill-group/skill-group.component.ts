import SkillGroup from 'src/models/SkillGroup';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent implements OnInit {

  constructor() { }

  @Input()
  skillGroup: SkillGroup;

  ngOnInit() {
  }

}
