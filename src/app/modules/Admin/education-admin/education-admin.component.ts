import IEducation from 'src/models/interface/IEductation';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EducationService } from 'src/services/education-service.service';
import { Education } from 'src/models/Education';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.css']
})
export class EducationAdminComponent implements OnInit {

  constructor(
    private eduService: EducationService,
    private toastr: ToastrService
  ) { }

  educations = Array<IEducation>();
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    const educationRequest = this.eduService.getEducations(null);
    educationRequest.subscribe(
      data => {
        this.educations = data.Value.map(e => {
          const edu = new Education(e);
          return edu;
        });
        this.loading = false;
      },
      e => {
        this.toastr.error(e, null, {
          enableHtml: true,
          positionClass: 'toast-top-full-width',
          progressBar: true,
          closeButton: true
        });
      }
    );
  }

}
