import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  styleUrls: ['./Spinner.css'],
  template: `

      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    `
})
export class SpinnerComponent {
  @Input()
  size = 25;
  @Input()
  show: boolean;
}
