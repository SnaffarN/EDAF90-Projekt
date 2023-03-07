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
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
      this.bookService.getSavedBooks().subscribe((books) => {
        console.log("[getSavedBooks] Retrieved saved books from json-server")
        this.saved = books
      });
      this.bookService.addSavedBook.subscribe(book => {
        console.log("[addSavedBook] Adding: " + book.title + " to saved books");
        this.saved.push(book);
      });
  }

  markAsRead(book: Book) {
    this.bookService.removeSaved(book);
    this.saved = this.saved.filter(b => b.id !== book.id);
  }
}
