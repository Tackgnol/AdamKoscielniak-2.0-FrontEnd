import { find } from 'lodash';
import { Component, OnInit } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  constructor() {

  }

  private themeWrapper = document.querySelector('body');

  themes = [
    {
      name: 'Code It  Black',
      styles: [
        { name: '--background-strong-color', value: '#000000' },
        { name: '--background-medium-color', value: '#f8f9fa' },
        { name: '--background-light-color', value: '#ffffff' },
        { name: '--text-strong-color', value: '#ffffff' },
        { name: '--text-medium-color', value: '#000000' },
        { name: '--text-light-color', value: '#000000' },
        { name: '--text-strong-color-accent', value: '#ffffff' },
        { name: '--text-medium-color-accent', value: '#838383' },
        { name: '--text-light-color-accent', value: '#838383' },
        { name: '--footer-image', value: 'url("/assets/lake-gs.jpg")' },
        { name: '--summary-image', value: 'url("/assets/wave-GS.jpg")' }
      ]
    },
    {
      name: 'Bug Red', styles: [
        { name: '--background-strong-color', value: '#B71C1C' },
        { name: '--background-medium-color', value: '#EF9A9A' },
        { name: '--background-light-color', value: '#ffffff' },
        { name: '--text-strong-color', value: '#ffffff' },
        { name: '--text-medium-color', value: '#ffffff' },
        { name: '--text-light-color', value: '#B71C1C' },
        { name: '--text-strong-color-accent', value: '#ffffff' },
        { name: '--text-medium-color-accent', value: '#FFEBEE' },
        { name: '--text-light-color-accent', value: '#E57373' },
        { name: '--footer-image', value: 'url("/assets/red-bot.jpg")' },
        { name: '--summary-image', value: 'url("/assets/red-top.jpg")' }
      ]
    },
    {
      name: 'Primary Blue', styles: [
        { name: '--background-strong-color', value: '#0D47A1' },
        { name: '--background-medium-color', value: '#E3F2FD' },
        { name: '--background-light-color', value: '#ffffff' },
        { name: '--text-strong-color', value: '#ffffff' },
        { name: '--text-medium-color', value: '#ffffff' },
        { name: '--text-light-color', value: '#0D47A1' },
        { name: '--text-strong-color-accent', value: '#ffffff' },
        { name: '--text-medium-color-accent', value: '#1976D2' },
        { name: '--text-light-color-accent', value: '#1565C0' },
        { name: '--footer-image', value: 'url("/assets/blue-bot.jpg")' },
        { name: '--summary-image', value: 'url("/assets/blue-top.jpg")' }
      ]
    },
    {
      name: 'Success Green', styles: [
        { name: '--background-strong-color', value: '#004D40' },
        { name: '--background-medium-color', value: '#B2DFDB' },
        { name: '--background-light-color', value: '#ffffff' },
        { name: '--text-strong-color', value: '#ffffff' },
        { name: '--text-medium-color', value: '#ffffff' },
        { name: '--text-light-color', value: '#004D40' },
        { name: '--text-strong-color-accent', value: '#ffffff' },
        { name: '--text-medium-color-accent', value: '#00897B' },
        { name: '--text-light-color-accent', value: '#00695C' },
        { name: '--footer-image', value: 'url("/assets/green-bot.jpg")' },
        { name: '--summary-image', value: 'url("/assets/green-top.jpg")' }
      ]
    }
  ];

  private saveToLocalStorage(themeName: string) {
    localStorage.setItem('theme', themeName);
  }

  private readFromLocalStorage() {
    return localStorage.getItem('theme');
  }

  private setTheme(themeName) {
    const styleSheet = find(this.themes, t => t.name === themeName);
    const variables = {};
    for (let i = 0; i < styleSheet.styles.length; i++) {
      const elem = styleSheet.styles[i];
      if (elem) {
        this.themeWrapper.style.setProperty(elem.name, elem.value);
        variables[elem.name] = elem.value;
      }
    }
    cssVars({ variables: variables });
  }

  global(themeName) {
    this.setTheme(themeName);
    this.saveToLocalStorage(themeName);
  }

  OnInit() {
  }

  ngOnInit(): void {
    let theme = this.readFromLocalStorage();
    if (!theme) {
      theme = this.themes[0].name;
    }
    this.setTheme(theme);
  }

}
