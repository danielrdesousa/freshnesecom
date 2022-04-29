import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'freshnesecom-ui-button-colored',
  templateUrl: './ui-button-colored.component.html',
  styleUrls: ['./ui-button-colored.component.scss'],
})
export class UiButtonColoredComponent implements OnInit {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = true;
  @Input() arrowRight = false;
  
  constructor() {}

  ngOnInit(): void {}
}
