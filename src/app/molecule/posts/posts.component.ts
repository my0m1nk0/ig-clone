import { Component } from '@angular/core';
import { PostService } from 'src/app/cores/services/post-service.ts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts:any;

  constructor(private postService:PostService){
    this.postService.getPost()
    this.postService.post.subscribe((res)=>{
      this.posts =res   
    })
  }
}