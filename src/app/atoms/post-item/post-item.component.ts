import { Component, Input,OnInit } from '@angular/core';
import { PostService } from 'src/app/cores/services/post-service.ts.service';
import { PostI } from 'src/app/models/post';
import { POSTACTION } from 'src/app/models/post-action-type';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit{
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: false, arrows: false };
  type = POSTACTION;
  @Input() postContent: PostI;

  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.toggleReaction(this.type: POSTACTION,event: Event);
  }
  toggleReaction(type: POSTACTION,event :Event) {
    event.preventDefault();
    this.postService[`${type}Posts`](this.postContent).subscribe((res)=>{
      console.log(res);
      
    })
  }

}
