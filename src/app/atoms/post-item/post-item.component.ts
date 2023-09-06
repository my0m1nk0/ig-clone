import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostServiceTsService } from 'src/app/cores/services/post-service.ts.service';
import { PostI } from 'src/app/models/post';
import { POSTACTION } from 'src/app/models/post-action-type';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: false, arrows: false };
  type = POSTACTION;
  @Input() postContent: PostI;
  @Output() addComment = new EventEmitter<boolean>()

  constructor(private postService: PostServiceTsService) { }

  ngOnInit() {
    // this.toggleReaction(this.type: POSTACTION,event: Event);
  }

  toggleReaction(type: POSTACTION, event: Event) {
    event.preventDefault();
    this.postService[`${type}Posts`](this.postContent).subscribe((res) => {
      console.log(res);

    })
  }

  openComment() {
    this.addComment.emit(true)
  }

}
