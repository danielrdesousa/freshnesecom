import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
import { ListsModule } from './lists/lists.module';

@NgModule({
  imports: [CommonModule, ButtonsModule, ListsModule],
  declarations: [],
  exports: [ButtonsModule, ListsModule],
})
export class UiModule {}
