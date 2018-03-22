import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apis.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  levelTree;

  constructor(private apiService: ApiService) { }

  getLevelTree(){
    this.levelTree = this.apiService.getTree();
  }

  ngOnInit() {
     this.getLevelTree();
  }
}
