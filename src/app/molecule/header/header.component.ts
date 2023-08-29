import { Component, OnInit } from '@angular/core';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User | null
  fontSize: number = 10
  constructor(private userService: FireStoreUserService) {

  }

  ngOnInit(): void {
    this.userService.loginUser.subscribe((userInfo) => {
      this.user = userInfo
    })
  }
}
