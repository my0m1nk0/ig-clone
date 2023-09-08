import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  menuItems = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        this.router.navigateByUrl('/user/profile')
      }
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        this.userService.logOut()
        this.router.navigateByUrl('/')
      }
    }
  ]
  constructor(private userService: FireStoreUserService, private router: Router,) {

  }

  ngOnInit(): void {
    this.userService.loginUser.subscribe((userInfo) => {
      this.user = userInfo
    })
  }


  testLog(){
    console.log("Call Log Fun");
    
  }
}
