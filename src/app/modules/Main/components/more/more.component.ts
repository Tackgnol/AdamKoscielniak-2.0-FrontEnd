import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/services/experience-service.service';

import { Experience } from 'src/models/Experience';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor(private expService: ExperienceService) { }

  loading = false;

  experience: Experience;
  ngOnInit() {
    this.loading = true;
    this.expService.getExperience('/current').subscribe(data => {
      console.log(data);
      this.experience = data.Value;
      this.loading = false;
    });
  }

}
