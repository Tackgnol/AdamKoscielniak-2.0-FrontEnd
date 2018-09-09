import { isEmpty, isNil } from 'lodash';
import { Experience } from 'src/models/Experience';

import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from 'src/services/experience-service.service';
import IExperience from 'src/models/interface/IExprience';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  constructor(private expServ: ExperienceService) { }

  @Input()
  newExperience: boolean;

  @Input()
  experience?: Experience;

  model: Experience;


  trackByFn(index, item) {
    return index;
  }

  addResponsibility = field => {
    if (!isEmpty(field.value)) {
      this.model.Responsibilities.push(field.value);
      field.value = '';
    }
  }

  addSkill = field => {
    if (!isEmpty(field.value)) {
      this.model.Skills.push(field.value);
      field.value = '';
    }
  }

  removeResponsibility = index => {
    this.model.Responsibilities.splice(index, 1);
  }

  removeSkill = index => {
    this.model.Skills.splice(index, 1);
  }

  moveResponsibility = (from, to) => {
    const f = this.model.Responsibilities.splice(from, 1)[0];

    this.model.Responsibilities.splice(to, 0, f);
  }

  moveSkill = (from, to) => {
    const f = this.model.Skills.splice(from, 1)[0];

    this.model.Skills.splice(to, 0, f);
  }


  onSubmit = () => {

    const currentState = this.model;
    const toSend: IExperience = {
      Id: currentState.Id,
      Employer: currentState.Employer,
      Position: currentState.Position,
      Responsibilities: currentState.Responsibilities,
      CurrentEmployer: isNil(currentState.getEndDate),
      Skills: currentState.Skills,
      BeginDate: currentState.getBeginDate,
      EndDate: currentState.getEndDate,
      Projects: currentState.Projects,
      Location: currentState.Location
    };

    if (this.newExperience) {
      console.log(toSend);
      this.expServ.newExperience(toSend).subscribe();
    } else {
      this.expServ.updateExperience(currentState.Id, toSend).subscribe();
    }
  }

  ngOnInit() {
    if (this.newExperience) {
      const exp = new Experience();
      this.model = exp;
    } else {
      this.model = this.experience;
    }
  }
}
