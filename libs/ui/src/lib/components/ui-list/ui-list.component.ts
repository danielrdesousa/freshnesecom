import { Component, Input, OnInit } from '@angular/core';

interface Item {
  title: string;
  router?: string;
  tag?: string;
  hideUnderline?: boolean;
}

interface Action {
  title?: string;
  router?: string;
}

interface List {
  title?: string;
  items: Item[];
  action?: Action;
}

@Component({
  selector: 'ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.scss'],
})
export class UiListComponent implements OnInit {
  @Input() list!: List;

  constructor() {}

  ngOnInit(): void {}
}
