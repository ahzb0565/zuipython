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
    this.apiService.getTree().subscribe((tree) => {
      this.levelTree = tree;
    });
  }

  ngOnInit() {
     this.getLevelTree();
  }
}
