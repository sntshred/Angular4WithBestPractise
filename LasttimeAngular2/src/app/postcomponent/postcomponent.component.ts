import { BadInput } from './../Common/BadInput';
import { NotFoundError } from 'app/Common/not-founderror';
import { Apperror } from './../Common/app-error';
import { PostserviceService } from './../Services/postservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {
 

  posts:any[];

  constructor(private service:PostserviceService) {
   
  };

  ngOnInit(): void {
    this
    .service.getAll() 
            .subscribe(posts=>this.posts = posts);
}

   createPost(input:HTMLInputElement){
     let post = {title:input.value}
     this.posts.splice(0,0,post);
     
     input.value='';
     this.service.create(post).
        subscribe(
          newpost=>{
                post['id'] = newpost.id;
                
   },
        (error:Apperror)=>{
          this.posts.splice(0,1);
          
          if(error instanceof BadInput)
            {}
          else throw error;
      
    });
  
  }

  updatePost(post){
   this.service.update(post).
        subscribe(
        updatedpost=>{
             console.log(updatedpost);
    })
  }


  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
       .subscribe(
      null,
        (error:Apperror)=>{
          this.posts.splice(index,0,post);
              if(error instanceof NotFoundError)
                alert('this post is already deleted');
              else throw error;
    })
  }



}
