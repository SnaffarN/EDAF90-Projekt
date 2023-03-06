import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../Book';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recommend-book',
  templateUrl: './recommend-book.component.html',
  styleUrls: ['./recommend-book.component.css']
})
export class RecommendBookComponent implements OnInit{

  search = {} as Book;
  books = [] as Book[];
  bookMatch = {title: ""} as Book;
  randomId: number = 0;

  newSuggestion(): void {
    let newBook = this.books[this.getRandomInt(this.books.length)];
    while(newBook.title === this.bookMatch.title)
      newBook = this.books[this.getRandomInt(this.books.length)];
    this.bookMatch = newBook;
  }

  saveBook(): void {
    this.bookService.saveBook(this.bookMatch);
  }
  
  constructor(private bookService: BookService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.search = this.bookService.getSearch();
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      if(this.bookService.getRandomize())
        this.bookMatch = books[this.getRandomInt(books.length)];
      else
        this.bookMatch = this.getBestMatch();

    })
  }

  private getMatchCount(search: Book, book: Book): number {
    let count: number = 0;
    if (search.genre === book.genre)
      count++;
    if (search.type === book.type) 
      count++;
    if (search.language === book.language)
      count++;
    if (search.set_in === book.set_in)
      count++;
    if (search.target_audience === book.target_audience)
      count++;
    console.log("Book: " + JSON.stringify(book));
    console.log("Search: " + JSON.stringify(search))
    console.log("Matched with: " + count + " criterias");
    return count;
  }

  public getBestMatch() {
    let bestMatchCount: number = -1;
    let bestMatchId: number = 0;
    this.books.forEach(book => {
      let matchCount: number = this.getMatchCount(this.search, book)
      if(matchCount > bestMatchCount) {
        bestMatchCount = matchCount;
        bestMatchId = book.id || 0; 
      }
    });
    console.log(bestMatchCount, bestMatchId)
    this.bookMatch = this.books[bestMatchId - 1];
    return this.books[bestMatchId - 1];
  }

  public getRandomize() {
    return this.bookService.getRandomize();
  }

  public setRandomize(randomize: boolean) {
    this.bookService.setRandomize(randomize);
  }

  public getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  openSnackBar(){
    this._snackBar.open("Book was added to favorites");
  }

}
