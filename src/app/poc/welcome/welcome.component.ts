import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  show: boolean = true;
  username:string;
 

  constructor() { 
    this.username = 'Steven Braveman';
  }

  ngOnInit() {
  }
  
  isNavbarShow() {}

  receiveAction($event) {
    this.show = $event;
    console.log(this.show);
  }
}
