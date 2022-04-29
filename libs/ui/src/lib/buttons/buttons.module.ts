import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonStrokeComponent } from './ui-button-stroke/ui-button-stroke.component';
import { UiButtonColoredComponent } from './ui-button-colored/ui-button-colored.component';
import { UiButtonBrightComponent } from './ui-button-bright/ui-button-bright.component';
import { UiButtonSimpleComponent } from './ui-button-simple/ui-button-simple.component';

@NgModule({
  declarations: [
    UiButtonStrokeComponent,
    UiButtonColoredComponent,
    UiButtonBrightComponent,
    UiButtonSimpleComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiButtonStrokeComponent,
    UiButtonColoredComponent,
    UiButtonBrightComponent,
    UiButtonSimpleComponent
  ],
})
export class ButtonsModule {}
