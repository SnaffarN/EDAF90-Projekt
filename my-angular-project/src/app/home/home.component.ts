import { Component } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  public onRandomize() {
    this.bookService.setRandomize(true);
  }

  public onSearch() {
    this.bookService.setRandomize(false);
  }

  constructor(private bookService: BookService){}
}
