import { Component, OnInit, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import { fade } from 'src/utils/Animations';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
  animations: [fade]
})
export class BackdropComponent implements OnInit, AfterViewInit {

  constructor() { }

  showConsole = true;


  typedString = 'pip install adamkoscielniak.eu.org';

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    const options = {
      strings: [this.typedString +
        '^1000<li> `installing Angular...`</li> ^1000<li>`installing Flask...`</li> ^1000<li> `installing mongoDb...`</li>',
        '<li> Fixing buuugs </li>',
        '<li> Fixing buggs </li>',
        '<li> Fixing vugs </li> <li> ...</li> <li> fixing bugs </li> <li> Checking for IE6</li> ',
        '<li> Launching... |</li>',
        '<li> Launching... /</li>',
        '<li> Launching... -</li>',
        '<li> Launching... \\</li>',
        '<li> Launching... -</li>',
        '<li> Launching... |</li>',
        '<li> Launching... /</li>',
        '<li> Launching...</li> <li>` App ready`</li>',

      ],
      typeSpeed: 40,
      backSpeed: 0,
      onComplete: () => {
        this.showConsole = false;
      },
      showCursor: false,
      smartBackspace: true
    };
    const typed = new Typed('#console', options);
  }
}
