import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  password: string;
  @Output() doActiveNextButton = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setupEnv() {
    console.log(this.password);
    if (this.password !== null) {
      if (this.password === 'test') {
        this.doActiveNextButton.emit(false);
      }
    }
  }
}
