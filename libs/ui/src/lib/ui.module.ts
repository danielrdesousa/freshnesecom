import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from './buttons/buttons.module';

import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [...fromComponents.all],
  exports: [ButtonsModule, ...fromComponents.all],
})
export class UiModule {}
