import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button-bright',
  templateUrl: './ui-button-bright.component.html',
  styleUrls: ['./ui-button-bright.component.scss'],
})
export class UiButtonBrightComponent implements OnInit {
  @Input() size = 'medium';
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
