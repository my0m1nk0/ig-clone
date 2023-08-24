import { Component, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { getFileReader } from 'src/app/cores/services/file-reader';

@Component({
  selector: 'app-post-create-form',
  templateUrl: './post-create-form.component.html',
  styleUrls: ['./post-create-form.component.scss']
})
export class PostCreateFormComponent {
  imgArray: string[] = []
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef

  constructor(private ngZone: NgZone, private cdf: ChangeDetectorRef) { }

  uploadImg() {
    console.log(this.imageInput);

    this.imageInput.nativeElement.click()
  }


  handleInput(event: any) {
    console.log(event);
    const file = event.target.files[0]
    if (file) {
      if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const fileReader = getFileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          const base64String = fileReader.result
          // this.ngZone.run(()=>{
          this.imgArray.push(base64String as string)
          // })
          this.cdf.detectChanges()
        }
      }

    }
  }

}
