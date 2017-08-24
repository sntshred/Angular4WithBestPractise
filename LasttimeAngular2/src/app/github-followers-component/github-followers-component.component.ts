
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from "app/Services/github-followers.service";

@Component({
  selector: 'app-github-followers-component',
  templateUrl: './github-followers-component.component.html',
  styleUrls: ['./github-followers-component.component.css']
})
export class GithubFollowersComponentComponent implements OnInit {
  followers: any[];
  constructor(private service: GithubFollowersService) { }
  

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }


}
