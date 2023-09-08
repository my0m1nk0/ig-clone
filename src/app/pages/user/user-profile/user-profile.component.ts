import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditProfileComponent } from 'src/app/atoms/edit-profile/edit-profile.component';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { PostServiceTsService } from 'src/app/cores/services/post-service.ts.service';
import { PostI } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers:[DialogService]
})
export class UserProfileComponent implements OnInit {
  loginUser: User | null
  userPost: PostI[] = []
  ref:DynamicDialogRef | undefined;
  constructor(private postService: PostServiceTsService, private userService: FireStoreUserService,private dialogService: DialogService) { }

  ngOnInit(): void {
    this.loginUser = this.userService.loginUser.getValue()
    if (this.loginUser){
      this.loginUser.profile_img = this.loginUser.profile_img ?? 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
      this.postService.getPostsByUser(this.loginUser.id).subscribe((res: any[]) => {
        this.userPost = res
      })
    }
    
  }

  setDefaultImg() {
    if (this.loginUser)
      this.loginUser.profile_img = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  }

  editProfile(){
    this.ref = this.dialogService.open(EditProfileComponent,{
      header: 'Edit Profile',
      width: '50%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true
    })
  }
}
