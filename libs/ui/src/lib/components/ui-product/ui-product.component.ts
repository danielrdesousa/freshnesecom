import { Component, Input, OnInit } from '@angular/core';

interface Product {
  title: string;
  image: string | null;
  description: string;
  value: number;
  off?: {
    percent: number;
    oldValue: number;
  };
  router: string;
}

@Component({
  selector: 'ui-product',
  templateUrl: './ui-product.component.html',
  styleUrls: ['./ui-product.component.scss'],
})
export class UiProductComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
