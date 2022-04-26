import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home.component';

import { UiModule } from '@freshnesecom/ui';

@NgModule({
  imports: [
    HomeRoutingModule,
    UiModule,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
