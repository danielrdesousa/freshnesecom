import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { UiModule } from '@freshnesecom/ui';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
