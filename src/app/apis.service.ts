import { Injectable } from '@angular/core';
import { TOPICS } from './mockTopics';
import { ARTICLE } from './mockArticle';


@Injectable()
export class ApiService {

  constructor() { }

  getTree(){
    return TOPICS; // TODO: Fix me, should call real api
  }

  getArticle(){
    return ARTICLE; // TODO: Fix me, should call real api
  }

}
