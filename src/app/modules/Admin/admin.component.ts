import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showSideBar = false;

  constructor() {}

  toggle = () => {
    this.showSideBar = !this.showSideBar;
  };

  ngOnInit() {}
}
