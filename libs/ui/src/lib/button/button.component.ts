import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size = 'medium';
  @Input() outline = false;
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
