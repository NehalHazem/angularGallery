import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/servce/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result;
  form: FormGroup;
  @Output() searchGallery = new EventEmitter<object>();

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      searchValue: ['', Validators.required]
    });
  }

  searchImages() {
    const searchValue = this.form.get('searchValue').value;
    this.service.searchImages(searchValue).subscribe(data => {
      this.searchGallery.emit(data);
      this.form.reset();
    });
  }

}
