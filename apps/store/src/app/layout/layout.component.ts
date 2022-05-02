import { Component } from '@angular/core';

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
  selector: 'freshnesecom-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  {
  menuList!: Menu[];

  constructor() {
    this.menuList = [
      {title: 'Bakery'},
      {title: 'Fruit and vegetables'},
      {title: 'Meat and fish'},
      {title: 'Drinks'},
      {title: 'Kitchen'},
      {title: 'Special nutricion'},
      {title: 'Baby'},
      {title: 'Pharmacy'}
    ]
  }
}
