import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/cores/services/post-service.ts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input()
  postObj:any
  
}
