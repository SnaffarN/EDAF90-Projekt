import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendBookComponent } from './recommend-book/recommend-book.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { HomeComponent } from './home/home.component';
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'recommend-books',component: RecommendBookComponent},
  {path: 'book-search',component: BookSearchComponent},
  {path: 'book-confirmation',component:BookConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
