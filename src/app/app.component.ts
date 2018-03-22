import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zui Python';
  levels = [
    {name: '初级', id: 1},
    {name: '中级', id: 2},
    {name: '高级', id: 1},
  ];

  currentLevel = 1; // TODO: Fix me, user depend on which user selected in the top nav bar.
}
