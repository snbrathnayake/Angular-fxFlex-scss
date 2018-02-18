import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 
  title = 'Angular fxLayout with SCSS';
  showTitle:boolean;

  constructor(){
    this.showTitle = false;
  }

  get isDescription(){
    return this.showTitle;
  }
}
