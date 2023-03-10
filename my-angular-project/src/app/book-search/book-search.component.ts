import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  @Output() submit: EventEmitter<any> = new EventEmitter();

  selected = -1;

  genres: Array<any> = [
    {name: "Adventure stories", value: "adventureStories"},
    {name: "Classics", value: "classics"},
    {name: "Crime", value: "crime"},
    {name: "Fantasy", value: "fantasy"},
    {name: "Historical fiction", value: "historicalFiction"},
    {name: "Horror", value: "horror"},
    {name: "Poetry", value: "poetry"},
    {name: "Romance", value: "romance"},
    {name: "Science fiction", value: "scienceFiction"},
    {name: "Short stories", value: "shortStories"},
    {name: "Thrillers", value: "thrillers"},
    {name: "Young adult", value: "youngAdult"},
    {name: "Fiction", value: "fiction"},
  ];

  types: Array<any> = [
    {name: "Novel", value: "novel"},
    {name: "Short story", value: "shortStory"},
    {name: "Part of Series", value: "partOfSeries"},
    {name: "Short story collection", value: "shortStoryCollection"},
    {name: "Poetry", value: "poetry"},
  ]

  set_in: Array<any> = [
    {name: "Fantasy", value: "fantasy"},
    {name: "Great Britain", value: "greatBritain"},
    {name: "Ireland", value: "ireland"},
    {name: "Italy", value: "italy"}, 
    {name: "Japan", value: "japan"}, 
    {name: "Russia", value: "russia"}, 
    {name: "Saint Helena", value: "saintHelena"},
    {name: "Spain", value: "spain"}, 
    {name: "Sweden", value: "sweden"},
    {name: "USA", value: "usa"}
  ]
  
  bookForm = this.fb.group({
    genre: [''],
    type: this.fb.array(Object.keys(this.types).map(key=> false)),
    language: [''],
    set_in: [''], 
    target_audience: ['']
  })

  submitForm() {
    this.bookForm.value.type = this.bookForm.value.type?.map((v, i) => v ? this.types[i].value : null).filter(v => v !== null)[0];
    const search = this.bookForm.value;
    this.book.addSearch(search as Book);
  }
  
  constructor(private fb: FormBuilder, private book: BookService) {
  }

  changeSelection(event:any, index:any) {
    this.selected = event.target.checked ? index : undefined;
  }
  
}
  
