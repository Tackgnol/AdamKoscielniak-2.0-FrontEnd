import { isEmpty } from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import SkillGroup from 'src/models/SkillGroup';
import ISkillGroup from 'src/models/interface/ISkillGroup';
import { SkillService } from 'src/services/skill-service.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorsToList } from 'src/utils/ErrorsToList';
import Skill from 'src/models/submodels/Skill';


@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  constructor(private sklServ: SkillService, private toastr: ToastrService) { }

  @Input()
  newSkill: boolean;

  @Input()
  skill?: SkillGroup;

  model: SkillGroup;


  onSubmit = () => {

    const currentState = this.model;
    const toSend: ISkillGroup = {
      Id: currentState.Id,
      Name: currentState.Name,
      Sort: currentState.Sort,
      Skills: currentState.Skills
    };

    if (this.newSkill) {
      this.sklServ.newSkillGroup(toSend).subscribe(
        () => this.toastr.info('Changes saved succefully'),
        e => this.toastr.error(e)
      );
    } else {
      this.sklServ.updateSkillGroup(currentState.Id, toSend).subscribe(
        () => this.toastr.info('Changes saved succefully'),
        e => {
          const errors = ErrorsToList(e);
          this.toastr.error(errors, null, {
            enableHtml: true,
            positionClass: 'toast-top-full-width',
            progressBar: true,
            closeButton: true
          });
        },
      );
    }
  }

  trackByFn(index, item) {
    return index;
  }

  addSkill = (name, proficiency) => {
    console.log(name, proficiency);
    const skillName = name.value;
    const skillProficiency = proficiency.value;
    if (!isEmpty(skillName) && !isEmpty(skillProficiency)) {
      const skill = new Skill({ Name: skillName, Proficiency: skillProficiency });
      this.model.Skills.push(skill);
      name.value = '';
      proficiency.value = 0;
    }
  }

  removeSkill = index => {
    this.model.Skills.splice(index, 1);
  }

  moveSkill = (from, to) => {
    const f = this.model.Skills.splice(from, 1)[0];

    this.model.Skills.splice(to, 0, f);
  }


  ngOnInit() {
    if (this.newSkill) {
      const edu = new SkillGroup();
      this.model = edu;
    } else {
      this.model = this.skill;
    }
  }
}
