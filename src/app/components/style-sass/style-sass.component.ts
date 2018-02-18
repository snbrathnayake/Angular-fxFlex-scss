import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-sass',
  templateUrl: './style-sass.component.html',
  styleUrls: ['./style-sass.component.scss']
})
export class StyleSassComponent implements OnInit {

  page:string;

  constructor() { 
    this.page = 'Sass Stylesheet page';
  }

  ngOnInit() {
  }

}
