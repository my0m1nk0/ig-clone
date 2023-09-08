import { Component, OnInit } from '@angular/core';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: User[] = []

  constructor(private userService: FireStoreUserService) { }

  ngOnInit(): void {
    this.userService.item$.subscribe((res) => {
      this.friends = res
    })
  }
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 'danger'
  }

  defImg(user: User) {
    user.profile_img = "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
  }

}
