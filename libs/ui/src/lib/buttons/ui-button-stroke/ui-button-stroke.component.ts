import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button-stroke',
  templateUrl: './ui-button-stroke.component.html',
  styleUrls: ['./ui-button-stroke.component.scss'],
})
export class UiButtonStrokeComponent implements OnInit {
  @Input() size = 'medium';
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
