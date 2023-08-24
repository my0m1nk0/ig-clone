import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.scss']
})
export class UserProfileIconComponent {
  @Input() fullname: string = "Testing Acc"
  @Input() imgUrl: string
}
