import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiListVerticalComponent } from './ui-list-vertical/ui-list-vertical.component';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [UiListVerticalComponent],
  imports: [CommonModule, ButtonsModule, RouterModule],
  exports: [UiListVerticalComponent],
})
export class ListsModule {}
