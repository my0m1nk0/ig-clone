import { Component, Input } from '@angular/core';
import { PostI } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,autoplay: false,arrows: false };
  @Input() postContent: PostI;

}
