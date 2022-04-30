import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-tag',
  templateUrl: './ui-tag.component.html',
  styleUrls: ['./ui-tag.component.scss'],
})
export class UiTagComponent implements OnInit {
  @Input() type = 'colored';
  @Input() size!: string;
  @Input() canDelete = false;

  constructor() {}

  ngOnInit(): void {}

  remove(event: Event): void {
    const element = (event.target as Element);
    const parentElement = element.parentElement;

    parentElement?.remove();
  }
}
