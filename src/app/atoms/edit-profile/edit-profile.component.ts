import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { getFileReader } from 'src/app/cores/services/file-reader';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements  OnInit{
  loginUser: User | null ;
  profileImg:string | undefined;
  // @ViewChild('calendar') calendar: Calendar; 
  updateProfileForm : FormGroup;
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef
  constructor(private userService : FireStoreUserService,private cdf :ChangeDetectorRef){}

  ngOnInit(): void {
    this.loginUser = this.userService.loginUser.getValue();
    if(this.loginUser){
      // console.log(this.dob);
      this.profileImg = this.loginUser?.profile_img;
    }

    this.updateProfileForm = new FormGroup({
      name: new FormControl(null),
      email : new FormControl(null,Validators.required),
      dob : new FormControl(null,Validators.required),
      about : new FormControl(null),
      bio : new FormControl(null),
      profile_img: new FormControl(null),
      // cover_img : new FormControl(null)
    },)
  }
  // ngAfterViewInit(): void {
  //   if (this.calendar) {
  //     this.calendar.writeValue(this.loginUser?.dob);
  //   }
  // }
  uploadImg(){
    this.imageInput.nativeElement.click()
  }
  handleInput(event:any){
    const file = event.target.files[0]
    if (file) {
      if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const fileReader = getFileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          this.profileImg = fileReader.result as string
          this.updateProfileForm.get('profile_img')?.setValue(this.profileImg);
          this.cdf.detectChanges()
        }
      }
    }
  }
  setDefaultImg() {
    if (this.loginUser)
      this.loginUser.profile_img = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  }
  updateProfile(){
    // this.userService.updateUser(this.updateProfileForm ).subscribe((res)=>{
    //   console.log(res);
    // })
  }
}
