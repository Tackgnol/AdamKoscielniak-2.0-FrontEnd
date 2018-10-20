import IEducation from 'src/models/interface/IEductation';
import { EducationService } from 'src/services/education-service.service';
import { Education } from 'src/models/Education';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Project from 'src/models/submodels/Project';
import { ErrorsToList } from 'src/utils/ErrorsToList';
import gradeConverter from 'src/utils/GradeConverter';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  constructor(private eduServ: EducationService, private toastr: ToastrService) { }


  @Input()
  newEducation: boolean;

  @Input()
  education?: Education;

  model: Education;

  roles = ['BA', 'MA'];

  grades = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0];


  onSubmit = () => {

    const currentState = this.model;
    const toSend: IEducation = {
      Id: currentState.Id,
      School: currentState.School,
      Faculty: currentState.Faculty,
      Course: currentState.Course,
      Level: currentState.Level,
      Thesis: currentState.Thesis,
      GradeEu: currentState.GradeEu,
      GradeUs: gradeConverter(currentState.GradeEu),
      BeginDate: currentState.getBeginDate,
      EndDate: currentState.getEndDate,
      Projects: currentState.Projects
    };

    if (this.newEducation) {
      console.log(toSend);
      this.eduServ.newEducation(toSend).subscribe(
        () => this.toastr.info('Changes saved succefully'),
        e => this.toastr.error(e)
      );
    } else {
      this.eduServ.updateEducation(currentState.Id, toSend).subscribe(
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

  setRole = role => {
    this.model.Level = role;
  }

  setGrade = grade => {
    this.model.GradeEu = grade;
  }

  newProject = () => {
    this.model.Projects.push(new Project());
  }


  ngOnInit() {
    if (this.newEducation) {
      const edu = new Education();
      this.model = edu;
    } else {
      this.model = this.education;
    }
  }

}
