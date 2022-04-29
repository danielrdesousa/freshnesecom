import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'freshnesecom-ui-button-bright',
  templateUrl: './ui-button-bright.component.html',
  styleUrls: ['./ui-button-bright.component.scss'],
})
export class UiButtonBrightComponent implements OnInit {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = true;
  @Input() arrowRight = false;
  
  constructor() {}

  ngOnInit(): void {}
}
