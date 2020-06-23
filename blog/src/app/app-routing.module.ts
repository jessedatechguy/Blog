import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CreateblogComponent } from './createblog/createblog.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent},
  { path: 'create', component:  CreateblogComponent}
  { path: '', component: ArticleListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
