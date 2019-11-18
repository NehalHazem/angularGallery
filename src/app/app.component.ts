import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: string;

  constructor(private router: Router) {}

  receivedNavItemVal(e) {
    this.value = e;
  }
}
