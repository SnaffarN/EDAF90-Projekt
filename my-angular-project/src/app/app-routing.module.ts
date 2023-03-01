import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendBookComponent } from './recommend-book/recommend-book.component';
import { BookSearchComponent } from './book-search/book-search.component';
const routes: Routes = [
  {path: 'recommend-books',component: RecommendBookComponent},
  {path: 'book-search',component: BookSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
