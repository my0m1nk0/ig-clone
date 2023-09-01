import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {
  @Input() postContent: any
  showComment: boolean = false


  toggleComment() {
    this.showComment = !this.showComment
  }
}
