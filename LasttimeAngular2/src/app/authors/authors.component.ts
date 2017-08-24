import { AuthorServiceService } from './../author-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(authors:AuthorServiceService) { 
    this.authors = authors.getAuthors();
  }

  ngOnInit() {
  }

}
