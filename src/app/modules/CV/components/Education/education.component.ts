import { Education } from 'src/models/Education';
import { EducationService } from './../../../../../services/education-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(
    private eduService: EducationService,
    private toastr: ToastrService,
    private filters: FilterService
  ) {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
        this.loadData();
      }
    );
  }
  loading = false;
  educations = Array<Education>();
  skills = Array<string>();

  loadData = () => {
    this.loading = true;
    const experienceRequest = this.eduService.getEducations({ skills: this.skills });
    experienceRequest.subscribe(
      data => {
        this.educations = data.Value;
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

  ngOnInit() {
    this.loadData();
  }

}
