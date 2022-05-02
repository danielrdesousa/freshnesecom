import { Component, OnInit } from '@angular/core';
import { Listagem } from '../../../shared/models/listagem.model';

@Component({
  selector: 'freshnesecom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listagem: Listagem = {
    title: 'Category Headline',
    items: [
      {
        title: 'Category Item 1',
        slug: 'category-item-1',
        router: '',
        underline: true,
        tag: '1',
      },
      {
        title: 'Category Item 2',
        slug: 'category-item-2',
        router: '',
        underline: true,
        tag: '320',
      }
    ],
    action: {
      title: null,
      router: '/#/',
    },
  };

  constructor(){}

  ngOnInit(): void {
    this.listagem;
  }

}
