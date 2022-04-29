import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button-colored',
  templateUrl: './ui-button-colored.component.html',
  styleUrls: ['./ui-button-colored.component.scss'],
})
export class UiButtonColoredComponent  {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}
}
