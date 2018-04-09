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
    this.apiService.getArticle(1).subscribe((article) => {
      this.article = article;
    });
  }

  ngOnInit() {
    this.getArticle();
  }

}
