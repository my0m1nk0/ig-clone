import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { getFileReader } from 'src/app/cores/services/file-reader';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  loginUser: User | null;
  profileImg: string | undefined;
  coverImg: string | undefined = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000';
  // @ViewChild('calendar') calendar: Calendar;
  updateProfileForm: FormGroup;
  @ViewChild("imageInput", { read: ElementRef }) imageInput: ElementRef
  @ViewChild("coverInput", { read: ElementRef }) coverInput: ElementRef
  constructor(private userService: FireStoreUserService, private cdf: ChangeDetectorRef, private ref: DynamicDialogRef,private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginUser = this.userService.loginUser.getValue();
    if (this.loginUser) {
      // console.log(this.dob);
      this.profileImg = this.loginUser?.profile_img;
    }

    this.updateProfileForm = new FormGroup({
      name: new FormControl(this.loginUser?.name),
      email: new FormControl(this.loginUser?.email, Validators.required),
      dob: new FormControl(this.loginUser?.dob ? new Date(this.loginUser?.dob) : null, Validators.required),
      about: new FormControl(this.loginUser?.about),
      bio: new FormControl(this.loginUser?.bio),
      profile_img: new FormControl(this.loginUser?.profile_img),
      cover_img: new FormControl(null)
    },)
  }
  // ngAfterViewInit(): void {
  //   if (this.calendar) {
  //     this.calendar.writeValue(this.loginUser?.dob);
  //   }
  // }
  uploadImg() {
    this.imageInput.nativeElement.click()
  }

  uploadCover() {
    this.coverInput.nativeElement.click()
  }
  handleInput(event: any, isCover?: boolean) {
    const file = event.target.files[0]
    if (file) {
      if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const fileReader = getFileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          if (isCover) {
            this.coverImg = fileReader.result as string
            this.updateProfileForm.get('cover_img')?.setValue(this.coverImg);
          }
          else {
            this.profileImg = fileReader.result as string
            this.updateProfileForm.get('profile_img')?.setValue(this.profileImg);
          }
          this.cdf.detectChanges()
        }
      }
    }
  }
  setDefaultImg() {
    if (this.loginUser)
      this.loginUser.profile_img = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  }
  updateProfile() {

    this.userService.updateUser({ ...this.updateProfileForm.value, dob: dayjs(this.updateProfileForm.value.dob).format('YYYY-MM-DD') }).subscribe((res) => {
      console.log(res);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Profile updated' })
      this.ref.close()
    })
  }
}
