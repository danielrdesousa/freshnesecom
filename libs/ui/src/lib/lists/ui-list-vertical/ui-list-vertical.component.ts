import { Component, Input, OnInit } from '@angular/core';

interface Item {
  title: string
  slug: string
  router: string | null
  underline: boolean
  tag: string | null
}

interface Action {
  title: string | null
  router: string | null
}

interface Listagem {
  title: string | null
  items: Item[]
  action: Action
}

@Component({
  selector: 'ui-list-vertical',
  templateUrl: './ui-list-vertical.component.html',
  styleUrls: ['./ui-list-vertical.component.scss'],
})
export class UiListVerticalComponent implements OnInit {
  @Input() listagem!: Listagem;
  @Input() color = 'default'

  constructor() {}

  ngOnInit(): void {}
}
