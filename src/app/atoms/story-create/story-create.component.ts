import {ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StoryService} from "../../cores/services/story.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {getFileReader} from "../../cores/services/file-reader";

@Component({
  selector: 'app-story-create',
  templateUrl: './story-create.component.html',
  styleUrls: ['./story-create.component.scss']
})
export class StoryCreateComponent implements OnInit{
  imgs:string;
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef
  storyForm: FormGroup
  constructor(private ngZone: NgZone, private cdf: ChangeDetectorRef, private storyService: StoryService, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.storyForm = new FormGroup({
      text: new FormControl(null),
      imgs: new FormControl(null, Validators.required),
    },)
  }
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
          this.imgs =base64String as string
          // })
          this.storyForm.get('imgs')?.setValue(this.imgs)
          this.cdf.detectChanges()
        }
      }
    }
  }

  uploadStory() {
    this.storyService.addNewStory({ ...this.storyForm.value }).subscribe((res: any) => {
      this.storyForm.reset();
      console.log(res,"Story");
      this.ref.close({ message: "Success" })
    })
  }

  closeDialog(){
    this.ref.close();
  }

}
