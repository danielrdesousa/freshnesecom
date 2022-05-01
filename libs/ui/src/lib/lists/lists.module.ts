import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiListVerticalComponent } from './ui-list-vertical/ui-list-vertical.component';
import { UiListHorizontalComponent } from './ui-list-horizontal/ui-list-horizontal.component';

@NgModule({
  declarations: [UiListVerticalComponent, UiListHorizontalComponent],
  imports: [CommonModule],
  exports: [UiListVerticalComponent, UiListHorizontalComponent],
})
export class ListsModule {}
