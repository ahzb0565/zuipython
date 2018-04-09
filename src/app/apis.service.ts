import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getTree(){
    const url = '/api/topics/';
    console.log(`Calling api ${url}`);
    return this.http.get(url);
  }

  getArticle(id){
    const url = `/api/article/${id}/`;
    console.log(`Calling api ${url}`);
    return this.http.get(url);
  }
}
