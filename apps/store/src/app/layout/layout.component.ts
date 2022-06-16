import { Component, ViewEncapsulation } from '@angular/core';
import { MENU_FOOTER, PRODUCT_TAGS } from '../shared/mocks';

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
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent  {
  menuList!: Menu[];
  menuFooter = MENU_FOOTER;
  productTags = PRODUCT_TAGS;

  constructor() {
    this.menuList = [
      { title: 'Bakery '},
      { title: 'Fruit and vegetables '},
      { title: 'Meat and fish '},
      { title: 'Drinks '},
      { title: 'Kitchen '},
      { title: 'Special nutricion '},
      { title: 'Baby '},
      { title: 'Pharmacy '}
    ];
  }
}
