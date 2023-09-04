import { Component, Input } from '@angular/core';
import { PostComment } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent {
  @Input() postComment: PostComment & { user: User }
}
