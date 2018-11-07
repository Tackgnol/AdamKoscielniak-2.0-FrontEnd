import { Component, OnInit } from '@angular/core';
import { find, isNil } from 'lodash';
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
    { id: 1, name: 'Home', url: 'home' },
    { id: 2, name: 'About', url: 'about' },
    { id: 3, name: 'CV', url: 'cv' },
  ];

  // { id: 4, name: 'Portfolio', url: 'portfolio' },
  // { id: 5, name: 'DevBlog', url: 'devBlog' }

  changeSelection = id => {
    this.selectedId = id;
    const element = find(this.menuItems, e => +e.id === id);

    if (!isNil(element)) {
      const domElem = document.getElementById(element.url);
      domElem.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.navbarOpen = false;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }

}
