import { Component, ViewChild, ElementRef, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionValidator } from 'src/app/cores/custom-validator/option.validator';
import { getFileReader } from 'src/app/cores/services/file-reader';

@Component({
  selector: 'app-post-create-form',
  templateUrl: './post-create-form.component.html',
  styleUrls: ['./post-create-form.component.scss']
})
export class PostCreateFormComponent implements OnInit {
  imgArray: string[] = []
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef
  postForm: FormGroup
  constructor(private ngZone: NgZone, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      text: new FormControl(null),
      imgs: new FormControl(null, Validators.required),
    },)
  }
  //{ validators: OptionValidator(['text', 'imgs']) }
  uploadImg() {
    this.imageInput.nativeElement.click()
  }

  handleInput(event: any) {
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
          this.postForm.get('imgs')?.setValue(this.imgArray)
          this.cdf.detectChanges()
        }
      }
    }
  }

}
