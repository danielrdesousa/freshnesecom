import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonsModule } from './buttons/buttons.module';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent, ButtonsModule],
})
export class UiModule {}
