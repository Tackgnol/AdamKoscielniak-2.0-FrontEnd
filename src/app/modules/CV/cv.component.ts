import { Experience } from './../../../models/Experience';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVMainComponent implements OnInit {
  constructor() {}
  experiences = Array<Experience>();
  ngOnInit() {}
}
