import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-github-profile-component',
  templateUrl: './github-profile-component.component.html',
  styleUrls: ['./github-profile-component.component.css']
})
export class GithubProfileComponentComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit() {
   
    console.log("init called");
  //  let para =this.route.snapshot.paramMap.get('id');
  //  console.log(para);

    this.route.paramMap.subscribe((params)=>{
      let id = +params.get("id");
      console.log(id);
   })
  }

}
