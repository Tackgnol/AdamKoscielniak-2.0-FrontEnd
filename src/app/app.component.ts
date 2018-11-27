import { Component, OnInit, HostListener } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdamKościelniak.pl';

  constructor() { }

  ngOnInit(): void {
    cssVars();

  }
}
