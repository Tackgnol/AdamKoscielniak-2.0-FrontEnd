import { FilterService } from './../../../../../services/filter.service';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/services/experience-service.service';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(
    private expService: ExperienceService,
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

  experiences = Array<Experience>();
  skills = Array<string>();
  loading: boolean;


  loadData = () => {
    this.loading = true;
    console.log(this.skills);
    const experienceRequest = this.expService.getExperiences({ skills: this.skills });
    experienceRequest.subscribe(
      data => {
        this.experiences = data.Value;
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
