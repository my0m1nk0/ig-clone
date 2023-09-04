import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { getFileReader } from 'src/app/cores/services/file-reader';
import { PostService } from 'src/app/cores/services/post-service.ts.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() postContent: any
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef
  showComment: boolean = false
  commentText: string
  commentImg: string

  constructor(private cdf: ChangeDetectorRef, private postService: PostService) { }

  toggleComment() {
    this.showComment = !this.showComment
  }

  ngOnInit(): void {
    console.log("init Post",this.postContent.id);
    
  }

  handleInput(event: any) {
    const file = event.target.files[0]
    if (file) {
      if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const fileReader = getFileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          this.commentImg = fileReader.result as string
          this.cdf.detectChanges()
          // this.ngZone.run(()=>{

          // })
        }
      }
    }
  }

  openCamera() {
    this.imageInput.nativeElement.click()
  }

  savePost() {
    this.postService.commentPost(this.postContent, this.commentText, this.commentImg).subscribe((res) => {

    })
  }

  removeImg() {
    this.commentImg = ''
    this.cdf.detectChanges()
  }


}
