import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
 
    genre = this._formBuilder.group({
      Fantasy: false,
      Bibliografi: false,
      Deckare: false,
    });
  
  
    firstForm = new FormControl('');
    time = new FormControl('');
    rating = new FormControl('');
    length= new FormControl('');
  
  
    constructor(private _formBuilder: FormBuilder) {}
  
  }
  
