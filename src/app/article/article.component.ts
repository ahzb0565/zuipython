import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apis.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;

  constructor(private apiService: ApiService) { }

  getArticle(){
    this.article = this.apiService.getArticle();
  }

  ngOnInit() {
    this.getArticle();
  }

}
