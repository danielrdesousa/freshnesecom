import { Component, Input, OnInit } from '@angular/core';

interface ItemMenu {
  title: string;
  router: string;
}

interface Menu {
  title: string;
  router?: string;
  subItem?: ItemMenu[];
}

@Component({
  selector: 'ui-menu',
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.scss'],
})
export class UiMenuComponent implements OnInit {
  @Input() menuList!: Menu[];

  constructor() {}

  ngOnInit(): void {}
}
