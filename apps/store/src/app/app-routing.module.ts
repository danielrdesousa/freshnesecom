import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'blog',
      loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
