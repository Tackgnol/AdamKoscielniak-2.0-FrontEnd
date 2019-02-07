import { Component, OnInit, Input } from '@angular/core';
import Hobby from 'src/models/Hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  constructor() { }

  @Input()
  hobby: Hobby;

  ngOnInit() {
  }

}
