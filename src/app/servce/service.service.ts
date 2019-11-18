import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  GetAllURL = 'https://api.unsplash.com/photos?per_page=30';
  GetByIdURL = 'https://api.unsplash.com/photos/';
  searchURL = 'https://api.unsplash.com/search/photos?per_page=30&query=';
  accessKey = 'client_id=f9dd60e35361a23374b29c58cb949119dbfd04d7361506a6fe9fbce868fd938e';

  constructor(private http: HttpClient, private router: Router) { }

  getImages() {
    return this.http.get(`${this.GetAllURL}&${this.accessKey}`);
  }

  getImageById(id) {
    return this.http.get(`${this.GetByIdURL}${id}?${this.accessKey}`);
  }

  searchImages(value) {
    return this.http.get(`${this.searchURL}${value}&${this.accessKey}`);
  }

}






// Access Key: f9dd60e35361a23374b29c58cb949119dbfd04d7361506a6fe9fbce868fd938e

// Secret key: 7bedcb32b4fb8e024891f4aadf896258821dafbe15f4646fe8ab2a625a5c46d4
