import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() isNextdisabled: boolean;

  constructor(private route: Router) { }

  ngOnInit() { }

  navigate(direction: string) {
    if (direction === 'next') {
      this.route.navigate(['/stylesheet-sass']);

    } else {
      this.route.navigate(['/home']);
    }

  }
}
