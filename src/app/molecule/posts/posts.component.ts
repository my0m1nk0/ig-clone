import { Component, OnInit } from '@angular/core';
import { PostServiceTsService } from 'src/app/cores/services/post-service.ts.service';
import { PostI } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: PostI[] = [];

  constructor(private postService: PostServiceTsService) {}

  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getPosts().subscribe(
      (posts: PostI[]) => {
        this.posts = posts;
        console.log(this.posts,"post");
      }
    );
  }
}
