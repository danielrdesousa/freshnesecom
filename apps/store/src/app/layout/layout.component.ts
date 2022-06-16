import { Component, ViewEncapsulation } from '@angular/core';
import { MENU_FOOTER, PRODUCT_TAGS, MAIN_MENU } from '../shared/mocks';

@Component({
  selector: 'freshnesecom-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent  {
  menuList = MAIN_MENU;
  menuFooter = MENU_FOOTER;
  productTags = PRODUCT_TAGS;
}
