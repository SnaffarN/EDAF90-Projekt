import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../Book';
@Component({
  selector: 'app-saved-books',
  templateUrl: './saved-books.component.html',
  styleUrls: ['./saved-books.component.css']
})
export class SavedBooksComponent implements OnInit {

  saved = [] as Book[];



  constructor(private bookService: BookService) {}

  ngOnInit(): void {
      this.bookService.getSavedBooks().subscribe((books) => this.saved = books)
  }


}
