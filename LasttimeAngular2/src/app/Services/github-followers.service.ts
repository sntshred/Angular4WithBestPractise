import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable, NgModule } from '@angular/core';

@NgModule()
@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super(http,'https://api.github.com/users/mosh-hamedani/followers');
  }
}
