import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiSearchComponent } from './ui-search/ui-search.component';

@NgModule({
  declarations: [
    UiSearchComponent
  ],
  imports: [CommonModule],
  exports: [
    UiSearchComponent
  ],
})
export class UiFormModule {}
