import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-recommend-book',
  templateUrl: './recommend-book.component.html',
  styleUrls: ['./recommend-book.component.css']
})
export class RecommendBookComponent {

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
