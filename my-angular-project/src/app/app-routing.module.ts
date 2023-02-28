import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRecommendationComponent } from './book-recommendation/book-recommendation.component';
import { RecommendBookComponent } from './recommend-book/recommend-book.component';
const routes: Routes = [
  {path: 'recommend-books',component: RecommendBookComponent},
  {path: 'book-recommendation',component: BookRecommendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
