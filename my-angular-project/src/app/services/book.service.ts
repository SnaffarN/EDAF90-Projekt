import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  public getSearch() : Book {
    return JSON.parse(localStorage.getItem("search") || '{}');
    //return this.search;
  }

  public addSearch(search: Book) {
    localStorage.setItem("search", JSON.stringify(search));
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + 'books');
  }

}
