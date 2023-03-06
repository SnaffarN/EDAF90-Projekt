import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-recommend-book',
  templateUrl: './recommend-book.component.html',
  styleUrls: ['./recommend-book.component.css']
})
export class RecommendBookComponent implements OnInit{

  search: string = '';

  constructor(private book: BookService) {}

  ngOnInit(): void {
    this.search = this.book.getSearch();
    console.log(this.search);
  }

}
