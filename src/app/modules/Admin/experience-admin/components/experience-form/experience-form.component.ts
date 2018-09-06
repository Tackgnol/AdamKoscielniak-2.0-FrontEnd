import { isNil } from 'lodash';
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
  experience: Experience;

  model: Experience;

  trackByFn(index, item) {
    return index;
  }


  onSubmit = () => {
    if (this.newExperience) {
      this.expServ.newExperience(this.model);
    } else {
      this.expServ.updateExperience(this.model.Id, this.model);
    }
  };

  ngOnInit() {
    this.model = this.experience;
  }
}
