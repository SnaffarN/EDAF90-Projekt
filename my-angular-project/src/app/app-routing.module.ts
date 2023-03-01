import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendBookComponent } from './recommend-book/recommend-book.component';
const routes: Routes = [
  {path: 'recommend-books',component: RecommendBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
