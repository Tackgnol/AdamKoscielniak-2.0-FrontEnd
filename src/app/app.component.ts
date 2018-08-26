import { AuthService } from './../services/auth-service.service';
import { ExperienceService } from './../services/experience-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdamKościelniak.pl';

  constructor(
    private experience: ExperienceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}
}
