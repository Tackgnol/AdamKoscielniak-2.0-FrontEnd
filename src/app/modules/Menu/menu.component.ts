import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  selectedId = 1;

  navbarOpen = false;

  menuItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'CV' },
    { id: 4, name: 'Portfolio' },
    { id: 5, name: 'DevBlog' }
  ];

  changeSelection = id => {
    this.selectedId = id;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }

}
