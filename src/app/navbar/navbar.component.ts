import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../servce/service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItemValue;
  @Output() navItemValEvent = new EventEmitter<string>();

  constructor(private service: ServiceService, private location: Location, private router: Router) { }

  ngOnInit() {
  }

  onClick(e) {
    const value = e.toElement.innerText;
    if (value === 'MORE' || value === undefined) {
      return;
    } else {
      this.service.searchImages(value).subscribe((data: any) => {
        this.navItemValEvent.emit(data.results);
      });
    }
  }

}
