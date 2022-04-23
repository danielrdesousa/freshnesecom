import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './pages/home/home.component';
import { PageCategoryComponent } from './pages/category/category.component';


const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'category',
    component: PageCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
