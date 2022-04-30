import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button-colored',
  templateUrl: './ui-button-colored.component.html',
  styleUrls: ['./ui-button-colored.component.scss'],
})
export class UiButtonColoredComponent implements OnInit {
  @Input() size = 'medium';
  @Input() arrowLeft = false;
  @Input() arrowRight = false;

  constructor() {}

  ngOnInit(): void {}
}
