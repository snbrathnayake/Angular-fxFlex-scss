import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-ui',
  templateUrl: './flex-ui.component.html',
  styleUrls: ['./flex-ui.component.scss']
})
export class FlexUiComponent implements OnInit {

  page:string;

  constructor() { 
    this.page = 'FlexLayout-UX page';
  }

  ngOnInit() {
  }

}
