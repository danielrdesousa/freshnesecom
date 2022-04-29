import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { UiButtonColoredComponent } from './buttons/ui-button-colored/ui-button-colored.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, UiButtonColoredComponent],
  exports: [ButtonComponent],
})
export class UiModule {}
