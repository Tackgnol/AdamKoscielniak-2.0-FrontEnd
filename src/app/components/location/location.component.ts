import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor() {}

  @Input()
  location: string;

  ngOnInit() {}
}
