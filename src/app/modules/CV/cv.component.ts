import { ToastrService } from 'ngx-toastr';
import { ExperienceService } from './../../../services/experience-service.service';
import { Experience } from './../../../models/Experience';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cv-main',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVMainComponent implements OnInit {
  constructor(private expService: ExperienceService, private toastr: ToastrService) {}
    experiences = Array<Experience>;
  ngOnInit() {
    const experienceRequest = this.expService.getExperiences(null);
    experienceRequest.subscribe(
        (data ) => {
            this.experiences = data.Value;
        },
        (e) => {
            this.toastr.error(e, null, {
                enableHtml: true,
                positionClass: 'toast-top-full-width',
                progressBar: true,
                closeButton: true
              });
        }
    )
  }
}
