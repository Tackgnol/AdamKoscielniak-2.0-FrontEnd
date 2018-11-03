import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-element',
  templateUrl: './summary-element.component.html',
  styleUrls: ['./summary-element.component.css']
})
export class SummaryElementComponent implements OnInit {

  constructor() { }

  @Input()
  element: any;

  ngOnInit() {
  }

}
