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
    this.filters.dateRange.subscribe(
      r => {
        this.dateRange = r;
        this.loadData();
      }
    );

  }

  experiences = Array<Experience>();
  skills = Array<string>();
  dateRange = ['2001-01-01', `${new Date().getFullYear()}-12-31`];
  loading: boolean;


  loadData = () => {
    this.loading = true;
    const experienceRequest = this.expService.getExperiences({from: this.dateRange[0], to: this.dateRange[1], skills: this.skills });
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
