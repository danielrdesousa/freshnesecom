import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-tag',
  templateUrl: './ui-tag.component.html',
  styleUrls: ['./ui-tag.component.scss'],
})
export class UiTagComponent implements OnInit {
  @ViewChild('contentWrapper') content!: ElementRef;

  @Input() type = 'colored';
  @Input() size!: string;
  @Input() canDelete = false;

  @Output() remove = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  removeDomElement(): void {
    const element = this.content.nativeElement as Element;
    const parentElement = element.parentElement;
    const tagName = (element?.textContent)?.toString();

    this.emitDeletedItem(tagName);
    parentElement?.remove();
  }

  emitDeletedItem(tagName: string = ''): void {
    this.remove.emit(tagName);
  }
}
