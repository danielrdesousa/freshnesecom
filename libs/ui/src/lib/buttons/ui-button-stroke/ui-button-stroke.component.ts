import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'freshnesecom-ui-button-stroke',
  templateUrl: './ui-button-stroke.component.html',
  styleUrls: ['./ui-button-stroke.component.scss'],
})
export class UiButtonStrokeComponent implements OnInit {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = true;
  @Input() arrowRight = false;
  
  constructor() {}

  ngOnInit(): void {}
}
