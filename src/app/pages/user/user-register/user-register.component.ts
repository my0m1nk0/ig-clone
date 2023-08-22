import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch, comparePassword } from 'src/app/cores/custom-validator/confirm-password.validator';
import { FireStoreUserService } from 'src/app/cores/services/fire-store-user.service';
import * as dayjs from 'dayjs';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  passwordRegx = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]))/
  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: FireStoreUserService, private messageService: MessageService) { }
  //[Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegx)]
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,),
      cpassword: new FormControl(null,),
      dob: new FormControl(),
    }, { validators: MustMatch('password', 'cpassword') })
  }


  saveUser() {

    if (this.registerForm.valid) {
      let dob = new Date(this.registerForm.value.dob)
      delete this.registerForm.value.cpassword
      this.userService.addNewUser({ ...this.registerForm.value, dob: dayjs(dob).format('YYYY-MM-DD') })
        .subscribe((res: any) => {
          if (res.status == 400) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
          } else {
            console.log(res, "new User");
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
            this.registerForm.reset()
          }
        })
    }

  }

  showAlert() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });

  }

}
