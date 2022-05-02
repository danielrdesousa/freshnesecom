import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';

import { ButtonsModule } from './buttons/buttons.module';
import { ListsModule } from './lists/lists.module';

@NgModule({
  imports: [CommonModule, ButtonsModule, ListsModule],
  declarations: [...fromComponents.all],
  exports: [ButtonsModule, ListsModule, ...fromComponents.all],
})

export class UiModule {}
