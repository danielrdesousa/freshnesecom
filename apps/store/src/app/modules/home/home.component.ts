import { Component } from '@angular/core';

const ITEMS_LIST = [

  {
    title: 'Kitchen',
    router: '/#/'
  },
  {
    title: 'Meat and fish',
    router: '/#/'
  },
  {
    title: 'Special nutrition',
    router: '/#/'
  },
  {
    title: 'Pharmacy',
    router: '/#/'
  },
  {
    title: 'Baby',
    router: '/#/'
  }
]

@Component({
  selector: 'freshnesecom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categoryMenu = {
    title: 'Category Menu',
    items: ITEMS_LIST,
    action: {
      title: 'More products',
      router: '/#/',
    }
  };

  products = {
    list: {
      title: 'Best selling products',
      action: {
        title: 'More products',
        router: '/#/',
      },
      items: ITEMS_LIST
    },
    items: [
      {
        title: 'Product title',
        description: 'Space for a small product description',
        value: 3.26,
        image: null,
        router: '/#/',
      },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        value: 1.48,
        image: null,
        router: '/#/',
        off: {
          percent: 36,
          oldValue: 48.56
        }
      },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        value: 0.28,
        image: null,
        router: '/#/',
      },
      {
        title: 'Product title',
        description: 'Space for a small product description',
        value: 1.12,
        image: null,
        router: '/#/',
      }
    ]
  }
}
