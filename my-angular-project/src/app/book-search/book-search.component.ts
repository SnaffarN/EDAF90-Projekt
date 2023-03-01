import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import {} from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  
  genres: Array<any> = [
    {name: "Adventure stories", value: "youngAdult"},
    {name: "Classics", value: "classics"},
    {name: "Crime", value: "crime"},
    {name: "Fairy tales, fables, folk tales", value: "tales"},
    {name: "Fantasy", value: "fantasy"},
    {name: "Historical fiction", value: "historicalFiction"},
    {name: "Horror", value: "horror"},
    {name: "Humour and satire", value: "humour"},
    {name: "Mystery", value: "mystery"},
    {name: "Poetry", value: "poetry"},
    {name: "Plays", value: "plays"},
    {name: "Romance", value: "romance"},
    {name: "Science fiction", value: "scienceFiction"},
    {name: "Short stories", value: "shortStories"},
    {name: "Thrillers", value: "thrillers"},
    {name: "War", value: "war"},
    {name: "Young adult", value: "youngAdult"},
  ];

  types: Array<any> = [
    {name: "Novel", value: "novel"},
    {name: "Short story", value: "shortStory"},
    {name: "Part of Series", value: "partOfSeries"},
    {name: "Short story collection", value: "shortStoryCollection"},
  ]
  
  time : Array<any> = [
    {name: "Prehistoric time", value: "prehistoric"},
    {name: "Modern time", value: "modernTime"}
  ]
  
  bookForm = this.fb.group({
    genre: this.fb.array(this.genres),
    type: this.fb.array(this.types),
    time: ['']
  })

  onCheckboxChange(e: any, type: string) {
    const checkArray: FormArray = this.bookForm.get(type) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    console.log(this.bookForm.value);
  }
  
  constructor(private fb: FormBuilder) {}
  
}
  
