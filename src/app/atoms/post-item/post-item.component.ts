import { Component, Input } from '@angular/core';
import { PostI } from 'src/app/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  // postImages: any[] = [{},{},{}]
  @Input() postContent: any;
}
