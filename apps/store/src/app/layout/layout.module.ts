import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '@freshnesecom/ui';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
