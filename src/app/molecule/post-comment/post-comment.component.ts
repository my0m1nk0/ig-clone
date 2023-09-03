import { Component, Input } from '@angular/core';
import {PostService} from "../../cores/services/post-service.ts.service";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {
  @Input() postContent: any
  showComment: boolean = false
  comment:string;

  constructor(private postService:PostService) {
  }

  toggleComment() {
    this.showComment = !this.showComment
  }

  commentPost(comment:string){
    this.comment = comment;
    this.postService.postComment(this.postContent,this.comment).subscribe((res)=>{
      console.log("comment post successfully")
    })
  }

}
