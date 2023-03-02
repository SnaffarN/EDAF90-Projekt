import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter,Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-random-book',
    templateUrl: './random-book.component.html',
    styleUrls: ['./random-book.component.css']
})
export class RandomBookComponent {
    constructor(private _http:HttpClient) {}
    newData:any = {} as any;


    // curl -X GET 'https://openlibrary.org/search/subjects.json?q=fantasy&language=eng' => Get all with fantasy
    // curl -X GET 'https://openlibrary.org/search.json?q=first_publish_year%253A%5B1200+TO+1400%5D' => Get all within 1200 to 1400 publisher year


    getData(){
        return this._http.get('https://openlibrary.org/search.json?q=*&subject=fantasy&sort=random&');
    }

    ngOnInit(){
        this.getData().subscribe(res =>{
            this.newData=res;
        })
    }

}
