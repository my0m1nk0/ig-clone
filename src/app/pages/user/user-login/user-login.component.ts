import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private userService: FireStoreUserService, private router: Router, private messageService: MessageService) { }
  //[Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegx)]

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl()
    })
  }

  loginUser() {
    // const user = this.userService.login(this.loginForm.value.email, this.loginForm.value.password)
    // if (user) {
    //   this.router.navigateByUrl("/")
    // }
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
      if (res) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "Login Successful !" });
        this.router.navigateByUrl("/")
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: "Email Or Password are invalid" });
      }
    })
  }
}
