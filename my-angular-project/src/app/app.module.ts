import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { RecommendBookComponent } from './recommend-book/recommend-book.component';
import { HomeComponent } from './home/home.component';
import {BookService} from './services/book.service';
import { BookConfirmationComponent } from './book-confirmation/book-confirmation.component';
import { SavedBooksComponent } from './saved-books/saved-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    RecommendBookComponent,
    HomeComponent,
    BookConfirmationComponent,
    SavedBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
