import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-work-time',
  templateUrl: './experience-work-time.component.html',
  styleUrls: ['./experience-work-time.component.css']
})
export class ExperienceWorkTimeComponent implements OnInit {
  constructor() {}

  @Input()
  dateFrom: { $date: number };
  @Input()
  dateTo: { $date: number };
  @Input()
  currentEmployer: boolean;
  @Input()
  position: string;
  displayDateTo: number | string;
  displayDateFrom: number;

  ngOnInit() {
    this.displayDateTo = this.currentEmployer
      ? 'Currently working here'
      : this.dateTo.$date;
    this.displayDateFrom = this.dateFrom.$date;
  }
}
