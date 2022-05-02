import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiTagComponent } from './components/ui-tag/ui-tag.component';

import { ButtonsModule } from './buttons/buttons.module';
import { ListsModule } from './lists/lists.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    ListsModule
  ],
  declarations: [
    UiTagComponent
  ],
  exports: [
    ButtonsModule,
    ListsModule,
    UiTagComponent
  ],
})

export class UiModule {}
