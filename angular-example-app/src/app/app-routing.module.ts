import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'article-list',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
  },
  { path: 'example-list',
  loadChildren: () => import('./example/example.module').then(m => m.ExampleModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
