import { Component, OnInit } from '@angular/core';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { PostServiceTsService } from 'src/app/cores/services/post-service.ts.service';
import { PostI } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  loginUser: User | null
  userPost: PostI[] = []
  constructor(private postService: PostServiceTsService, private userService: FireStoreUserService) { }

  ngOnInit(): void {
    this.loginUser = this.userService.loginUser.getValue()
    if (this.loginUser){
      this.loginUser.profile_img = this.loginUser.profile_img ?? 'https://primefaces/cdn/primeng/images/demo/avatar/amyelsner.png'
      this.postService.getPostsByUser(this.loginUser.id).subscribe((res: any[]) => {
        this.userPost = res
      })
    }
      
  }


  setDefaultImg() {
    if (this.loginUser)
      this.loginUser.profile_img = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  }
}
