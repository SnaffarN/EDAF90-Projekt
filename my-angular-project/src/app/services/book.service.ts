import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { 
  
  }

  public getSearch() {
    return localStorage.getItem("search") || '{}'
    //return this.search;
  }

  public addSearch(search: string) {
    localStorage.setItem("search", search)
  }
}
