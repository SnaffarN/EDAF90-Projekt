import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../Book';
@Component({
  selector: 'app-saved-books',
  templateUrl: './saved-books.component.html',
  styleUrls: ['./saved-books.component.css']
})
export class SavedBooksComponent implements OnInit {
  saved = [] as Book[];
  
  constructor(private bookService: BookService) {
    bookService.addSavedBook.subscribe(book =>
      this.addSavedBook(book));
  }

  ngOnInit(): void {
      this.bookService.getSavedBooks().subscribe((books) => this.saved = books)
  }

  markAsRead(book: Book) {
    this.bookService.removeSaved(book);
    this.saved = this.saved.filter(b => b.id !== book.id);
  }

  addSavedBook(book: Book) {
    this.saved.push(book);
  }
}
