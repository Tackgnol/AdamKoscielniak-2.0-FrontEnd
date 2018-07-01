import { ExperienceService } from './../services/experience-service.service';
import { Experience } from './../models/Experience';
import { Http } from '@angular/http';
import { BaseService } from './../utils/baseService';
import { SpinnerComponent } from '../utils/components/Spinner';
import { Component, OnInit } from '@angular/core';
import IExperience from '../models/interface/IExprience';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exp: Experience;
  title = 'App';
  showSpinner: boolean;
  constructor(private experience: ExperienceService) {
    this.exp = <Experience>{};
  }

  ngOnInit(): void {
    this.experience.getExperience(2).subscribe(exp => {
      console.log(exp);
      this.exp = exp.Value;
    });
  }
}
