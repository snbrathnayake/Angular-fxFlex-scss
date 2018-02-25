import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 
  title = 'Angular fxLayout with SCSS';

  constructor(private routes:Router){}

  onPressedDemo(){
    this.routes.navigate(['/poc']);
  }
  
}
