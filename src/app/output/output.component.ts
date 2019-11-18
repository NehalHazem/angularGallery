import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../servce/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnChanges {

  imgById;
  profileImage;
  userName;
  fullImg;
  @Input() navItemVal: any;
  imgs;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.getImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.navItemVal.currentValue);
    if (changes.navItemVal.currentValue === undefined) {
      return;
    } else {
      this.imgs = changes.navItemVal.currentValue;
    }
  }

  getImages() {
    this.service.getImages().subscribe(imgs => this.imgs = imgs);
  }

  searchImages(e) {
    this.imgs = e.results;
  }

  onShowNew() {
    console.log(this.navItemVal);
  }

  // getImageById(imgId) {
  //   this.imgById = '';
  //   this.service.getImageById(imgId).subscribe(img => {
  //     this.imgById = img;
  //     this.profileImage = this.imgById.user.profile_image.small;
  //     this.userName = this.imgById.user.name;
  //     this.fullImg = this.imgById.urls.regular;
  //   });
  // }

  getImageById(imgId) {
    this.fullImg = '';
    this.service.getImageById(imgId).subscribe(img => {
      this.imgById = img;
      this.fullImg = this.imgById.urls.regular;
    });
  }

}
