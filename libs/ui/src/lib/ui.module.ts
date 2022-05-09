import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from './buttons/buttons.module';
import { UiFormModule } from './form/ui-form.module';
import { ListsModule } from './lists/lists.module';

import * as fromComponents from './components';


@NgModule({
  imports: [CommonModule, ButtonsModule, UiFormModule, ListsModule],
  declarations: [...fromComponents.all],
  exports: [ButtonsModule, UiFormModule, ListsModule, ...fromComponents.all],
})

export class UiModule {}
