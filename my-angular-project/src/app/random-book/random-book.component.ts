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
    newData:any;

    getData(){
        return this._http.get('https://openlibrary.org/books/OL28549292M.json');
    }

    ngOnInit(){
        this.getData().subscribe(res =>{
            this.newData=res;
        })
    }

}
