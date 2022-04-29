import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'freshnesecom-ui-button-simple',
  templateUrl: './ui-button-simple.component.html',
  styleUrls: ['./ui-button-simple.component.scss'],
})
export class UiButtonSimpleComponent implements OnInit {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = true;
  @Input() arrowRight = false;
  
  constructor() {}

  ngOnInit(): void {}
}
