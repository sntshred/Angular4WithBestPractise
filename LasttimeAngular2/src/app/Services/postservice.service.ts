import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PostserviceService extends DataService {
  
  constructor( http:Http) {
    super(http,'https://jsonplaceholder.typicode.com/posts')
   };

}
