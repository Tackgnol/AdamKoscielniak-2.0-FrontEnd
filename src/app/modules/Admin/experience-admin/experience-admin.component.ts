import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/services/experience-service.service';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/models/Experience';
import IExperience from 'src/models/interface/IExprience';

@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.css']
})
export class ExperienceAdminComponent implements OnInit {
  constructor(
    private expService: ExperienceService,
    private toastr: ToastrService
  ) { }

  experiences = Array<IExperience>();
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    const experienceRequest = this.expService.getExperiences(null);
    experienceRequest.subscribe(
      data => {
        this.experiences = data.Value.map(e => {
          const exp = new Experience(e);
          console.log(exp);
          return exp;
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
