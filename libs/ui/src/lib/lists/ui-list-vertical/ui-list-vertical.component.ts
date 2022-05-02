import { Listagem } from 'apps/store/src/app/shared/models/listagem.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-list-vertical',
  templateUrl: './ui-list-vertical.component.html',
  styleUrls: ['./ui-list-vertical.component.scss'],
})
export class UiListVerticalComponent implements OnInit {
  @Input() title!: string;
  @Input() listagem!: Listagem;

  constructor() {}

  ngOnInit(): void {}
}
