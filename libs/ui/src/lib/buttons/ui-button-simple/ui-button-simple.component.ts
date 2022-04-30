import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button-simple',
  templateUrl: './ui-button-simple.component.html',
  styleUrls: ['./ui-button-simple.component.scss'],
})
export class UiButtonSimpleComponent implements OnInit {
  @Input() size = 'medium';
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
