import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-list-vertical',
  templateUrl: './ui-list-vertical.component.html',
  styleUrls: ['./ui-list-vertical.component.scss'],
})
export class UiListVerticalComponent implements OnInit {

  @Input() title = 'Category Headline';
  @Input() items!: [];

  constructor() {}

  ngOnInit(): void {}
}
