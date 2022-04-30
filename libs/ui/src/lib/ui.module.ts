import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
import { UiTagComponent } from './components/ui-tag/ui-tag.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [
    UiTagComponent
  ],
  exports: [
    ButtonsModule,
    UiTagComponent
  ],
})
export class UiModule {}
