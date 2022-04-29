import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonColoredComponent } from './buttons/ui-button-colored/ui-button-colored.component';
import { UiButtonBrightComponent } from './buttons/ui-button-bright/ui-button-bright.component';
import { UiButtonSimpleComponent } from './buttons/ui-button-simple/ui-button-simple.component';
import { UiButtonStrokeComponent } from './buttons/ui-button-stroke/ui-button-stroke.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiButtonColoredComponent,
    UiButtonBrightComponent,
    UiButtonSimpleComponent,
    UiButtonStrokeComponent
  ],
  exports: [
    UiButtonColoredComponent,
    UiButtonBrightComponent,
    UiButtonSimpleComponent,
    UiButtonStrokeComponent
  ],
})
export class UiModule {}
